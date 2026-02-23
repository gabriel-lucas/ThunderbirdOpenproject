# Fix Plan: Thunderbird OpenProject Extension

## Problem Summary

The extension has two main issues:
1. **Project selector shows "Could not connect to OpenProject"** - even though users load correctly
2. **Task creation fails** with "Adding Task failed"

## Root Cause Analysis

### Issue 1: Project Loading Failure

**Location:** [`getAllProjects()`](thunderbird-openproject/scripts/api_utils.js:44) in `api_utils.js`

**Problem:** The function has unsafe null access when processing project hierarchy:

```javascript
res._embedded.elements.forEach((proj) => {
    if (proj._links.parent.href) {  // <-- CRASH: parent can be null
        const projhref = proj._links.parent.href.split("/");
        projects[projhref[4]].childs.push(proj);  // <-- CRASH: parent project might not exist
    } else {
        roots.push(proj);
    }
});
```

Two failure points:
1. `proj._links.parent` can be `null` - accessing `.href` throws an error
2. `projects[projhref[4]]` can be `undefined` if the parent project ID is not in the list (e.g., user lacks permission to view parent)

**Why users work but projects don't:** The `getAllUsers()` function is simpler - it just iterates over users without complex hierarchy processing.

### Issue 2: Task Creation Failure

**Location:** [`addTask()`](thunderbird-openproject/scripts/api_utils.js:74) in `api_utils.js`

**Problem:** The function uses hardcoded IDs that are specific to the original developer's OpenProject instance:

```javascript
"_links": {
    "type": {
        "href": "/api/v3/types/1",        // HARDCODED - may not exist
        "title": "Task"
    },
    "status": {
        "href": "/api/v3/statuses/1",     // HARDCODED - may not exist
        "title": "New"
    },
    "priority": {
        "href": "/api/v3/priorities/8",   // HARDCODED - may not exist
        "title": "Normal"
    },
    "category": {
        "href": "/api/v3/categories/3",   // HARDCODED - may not exist
        "title": "From email"
    }
}
```

These IDs vary between OpenProject instances. The API will reject the request if:
- Type ID 1 doesn't exist or isn't available for the project
- Status ID 1 doesn't exist or isn't valid for the type
- Priority ID 8 doesn't exist
- Category ID 3 doesn't exist in the project

## Proposed Fixes

### Fix 1: Safe Project Hierarchy Processing

Update `getAllProjects()` to handle null parent references safely:

```javascript
function getAllProjects() {
    return requestGet("/api/v3/projects").then((res) => {
        let projects = {};
        let roots = [];
        res._embedded.elements.forEach((proj) => {
            projects[proj.id] = proj;
            proj.childs = [];
        });
        res._embedded.elements.forEach((proj) => {
            // Safe null check for parent
            const parentHref = proj._links?.parent?.href;
            if (parentHref) {
                const projhref = parentHref.split("/");
                const parentId = projhref[4];
                // Only add if parent exists in our projects list
                if (projects[parentId]) {
                    projects[parentId].childs.push(proj);
                } else {
                    // Parent not accessible, treat as root
                    roots.push(proj);
                }
            } else {
                roots.push(proj);
            }
        });
        return roots.sort(compareNames);
    });
}
```

### Fix 2: Dynamic Type/Status/Priority/Category Fetching

The OpenProject API requires valid IDs. We need to:

1. **Fetch available types for the project:** `GET /api/v3/projects/{id}/types`
2. **Fetch available statuses:** `GET /api/v3/statuses`
3. **Fetch available priorities:** `GET /api/v3/priorities`
4. **Fetch available categories for the project:** `GET /api/v3/projects/{id}/categories`

Then use the first available option for each, or make them configurable in settings.

**Simplified approach for initial fix:**

```javascript
async function addTask(content, projectid, assigneeid, messageContent) {
    // Fetch the project to get available work package metadata
    const project = await requestGet(`/api/v3/projects/${projectid}`);
    
    // Get available types for this project
    const types = await requestGet(`/api/v3/projects/${projectid}/types`);
    const typeId = types._embedded?.elements?.[0]?.id || 1;
    
    // Get available priorities
    const priorities = await requestGet("/api/v3/priorities");
    const priorityId = priorities._embedded?.elements?.[0]?.id || 8;
    
    // Build the work package payload with dynamic IDs
    return requestPost("/api/v3/work_packages", {
        "subject": content,
        "description": {
            "format": "textile",
            "raw": messageContent || ""
        },
        "_links": {
            "type": {
                "href": `/api/v3/types/${typeId}`
            },
            "assignee": {
                "href": `/api/v3/users/${parseInt(assigneeid, 10)}`
            },
            "project": {
                "href": `/api/v3/projects/${parseInt(projectid, 10)}`
            }
        }
    });
}
```

### Fix 3: Improve Error Handling

Add better error messages to help debug issues:

```javascript
async function doRequest(endpoint, config) {
    // ... existing code ...
    return window
        .fetch(apiurl + endpoint, config)
        .then(async (res) => {
            if (!res.ok) {
                const errorBody = await res.text();
                console.error(`API Error [${res.status}] ${endpoint}:`, errorBody);
                return Promise.reject(new Error(`API Error: ${res.status} - ${errorBody}`));
            }
            return res.json();
        });
}
```

## Implementation Order

1. Fix `getAllProjects()` null safety issue
2. Fix `addTask()` to use dynamic IDs
3. Improve error handling and logging
4. Test with user's OpenProject instance

## Files to Modify

| File | Changes |
|------|---------|
| `thunderbird-openproject/scripts/api_utils.js` | Fix `getAllProjects()` and `addTask()` functions |
| `thunderbird-openproject/scripts/common.js` | Improve error display in `addTaskFromMessage()` |

## Testing Recommendations

After implementing fixes:
1. Open Thunderbird's Developer Tools (Tools > Developer Tools > Developer Toolbox)
2. Go to extension settings and verify projects load correctly
3. Try creating a task and check console for any API errors
4. Verify the task appears in OpenProject
