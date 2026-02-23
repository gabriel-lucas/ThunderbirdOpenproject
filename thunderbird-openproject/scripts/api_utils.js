async function doRequest(endpoint, config) {
    let apiurl = await loadAPIUrl();
    let apikey = await loadAPIToken();

    var credentials = btoa("apikey:" + apikey);
    config.headers = {
        Authorization: "Basic " + credentials,
    };
    if (config.body) {
        config.headers["Content-Type"] = "application/json";
    }

    // This could be split up into sequential async code as well.
    return window
        .fetch(apiurl + endpoint, config)
        .then(async (res) => {
            if (!res.ok) {
                const errorBody = await res.text();
                console.error("API Error [" + res.status + "] " + endpoint + ": ", errorBody);
                return Promise.reject(new Error("API Error: " + res.status + " - " + errorBody));
            }
            return res.json();
        });
}

function requestGet(endpoint) {
    return doRequest(endpoint, { method: "get" });
}

function requestPost(endpoint, data) {
    return doRequest(endpoint, { method: "post", body: JSON.stringify(data) });
}

function compareNames(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}


function getAllProjects() {
    return requestGet("/api/v3/projects").then((res) => {
        let projects = {};
        let roots = [];
        res._embedded.elements.forEach((proj) => {
            projects[proj.id] = proj;
            proj.childs = [];
        });
        res._embedded.elements.forEach((proj) => {
            // Safe null check for parent - use optional chaining
            const parentHref = proj._links?.parent?.href;
            if (parentHref) {
                const projhref = parentHref.split("/");
                const parentId = projhref[4];
                // Only add to parent if parent exists in our projects list
                if (projects[parentId]) {
                    projects[parentId].childs.push(proj);
                } else {
                    // Parent not accessible, treat as root project
                    roots.push(proj);
                }
            } else {
                roots.push(proj);
            }
        });
        return roots.sort(compareNames);
    });
}

function getAllUsers() {
    return requestGet("/api/v3/users").then((res) => {
        let users = [];
        res._embedded.elements.forEach((usr) => {
            users.push(usr);
        });
        return users.sort(compareNames);
    });
}

async function getAvailableTypes(projectId) {
    try {
        const types = await requestGet("/api/v3/types");
        return types._embedded?.elements || [];
    } catch (e) {
        console.error("Failed to fetch types:", e);
        return [];
    }
}

async function getAvailablePriorities() {
    try {
        const priorities = await requestGet("/api/v3/priorities");
        return priorities._embedded?.elements || [];
    } catch (e) {
        console.error("Failed to fetch priorities:", e);
        return [];
    }
}

async function addTask(content, projectid, assigneeid, responsibleid, description, startDate, endDate) {
    // Fetch available types and priorities dynamically
    const [types, priorities] = await Promise.all([
        getAvailableTypes(projectid),
        getAvailablePriorities()
    ]);
    
    // Use first available type, or fallback to a default
    const typeId = types.length > 0 ? types[0].id : null;
    const priorityId = priorities.length > 0 ? priorities[0].id : null;
    
    // Build the work package payload
    const payload = {
        "subject": content,
        "_links": {
            "project": {
                "href": "/api/v3/projects/" + parseInt(projectid, 10)
            }
        }
    };
    
    // Add description if provided
    if (description) {
        payload.description = {
            "format": "textile",
            "raw": description
        };
    }
    
    // Add start date if provided
    if (startDate) {
        payload.startDate = startDate;
    }
    
    // Add due date (end date) if provided
    if (endDate) {
        payload.dueDate = endDate;
    }
    
    // Add type if available
    if (typeId) {
        payload._links.type = {
            "href": "/api/v3/types/" + typeId
        };
    }
    
    // Add priority if available
    if (priorityId) {
        payload._links.priority = {
            "href": "/api/v3/priorities/" + priorityId
        };
    }
    
    // Add assignee if provided
    if (assigneeid) {
        payload._links.assignee = {
            "href": "/api/v3/users/" + parseInt(assigneeid, 10)
        };
    }
    
    // Add responsible if provided
    if (responsibleid) {
        payload._links.responsible = {
            "href": "/api/v3/users/" + parseInt(responsibleid, 10)
        };
    }
    
    return requestPost("/api/v3/work_packages", payload);
}
