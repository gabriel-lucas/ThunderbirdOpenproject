# UI/UX Enhancement Plan for Thunderbird OpenProject Extension

## Overview
This plan outlines comprehensive UI/UX improvements and new features for the Thunderbird OpenProject extension.

---

## Phase 1: Bug Fixes

### 1.1 Dropdown Placeholder Behavior
**Problem:** Placeholder option "Select project..." appears both as placeholder and as an option in the dropdown list.

**Solution:** Use CSS to hide the placeholder option when dropdown is open, or use JavaScript to remove it after first selection.

**Files to modify:**
- `thunderbird-openproject/popup.css` - Add CSS to style placeholder
- `thunderbird-openproject/scripts/common.js` - Update fill functions to handle placeholder correctly

```javascript
// Approach: Use disabled selected option as placeholder
<option value="" disabled selected class="placeholder">Select project...</option>
```

### 1.2 Dropdown Drag Cursor Issue
**Problem:** When clicking dropdown and moving mouse over options, cursor changes to drag and a white semitransparent rectangle appears.

**Solution:** This is likely caused by Thunderbird's browser_style interfering. Add CSS to prevent drag behavior.

**Files to modify:**
- `thunderbird-openproject/popup.css`

```css
select, select option {
    -webkit-user-drag: none;
    user-select: none;
    cursor: pointer;
}
```

---

## Phase 2: UI/UX Redesign

### 2.1 Panel Layout Redesign
**Goal:** Two-column layout that shows all elements without scrolling.

**New Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  Task [textarea    ]     │  Project [dropdown    ]      │
├─────────────────────────────────────────────────────────┤
│  Assigned [dropdown ]     │  Responsible [dropdown ]    │
├─────────────────────────────────────────────────────────┤
│  Description [textarea spanning both columns           ]│
│  ☐ Copy body                                           │
├─────────────────────────────────────────────────────────┤
│  Start Date [date    ]   │  End Date [date    ]         │
├─────────────────────────────────────────────────────────┤
│  Priority [dropdown  ]   │  Category [dropdown  ]       │
├─────────────────────────────────────────────────────────┤
│  Work [input] hour       │  Remaining [input] hour      │
├─────────────────────────────────────────────────────────┤
│                    [Add Task]                           │
└─────────────────────────────────────────────────────────┘
```

**Width:** Increase from 420px to approximately 520px to fit two columns comfortably.

**Files to modify:**
- `thunderbird-openproject/popup.css` - Complete layout overhaul
- `thunderbird-openproject/popup_message.html` - Restructure HTML
- `thunderbird-openproject/popup_compose.html` - Restructure HTML

### 2.2 Remove Header Section
**Current:** Header with icon and "Add Task" title takes up space.

**New:** Remove header entirely. The "Add Task" button at the bottom is sufficient context.

**Files to modify:**
- `thunderbird-openproject/popup_message.html` - Remove header div
- `thunderbird-openproject/popup_compose.html` - Remove header div
- `thunderbird-openproject/popup.css` - Remove header styles

### 2.3 Checkbox Repositioning
**Current:** Checkbox is at the bottom before the button.

**New:** Move checkbox directly below description textarea with label "Copy email". When checked, automatically populate description with message body.

**Files to modify:**
- `thunderbird-openproject/popup_message.html` - Move checkbox
- `thunderbird-openproject/scripts/popup_message.js` - Add logic to copy body to description

### 2.4 Button Styling
**Current:** Full-width button with excessive width.

**New:** Centered button with appropriate width (not full-width).

```css
.popup-button {
    display: flex;
    justify-content: center;
}
.popup-button button {
    width: auto;
    min-width: 120px;
    padding: 8px 24px;
}
```

---

## Phase 3: New Features

### 3.1 Priority Field
**API Endpoint:** `/api/v3/priorities`

**Implementation:**
1. Add function `getAllPriorities()` in `api_utils.js`
2. Add function `fillAllPrioritiesSelect()` in `common.js`
3. Add priority select in HTML files
4. Include priority in task creation payload

**Files to modify:**
- `thunderbird-openproject/scripts/api_utils.js`
- `thunderbird-openproject/scripts/common.js`
- `thunderbird-openproject/popup_message.html`
- `thunderbird-openproject/popup_compose.html`
- `thunderbird-openproject/settings.html` (for default priority)

### 3.2 Category Field
**Note:** Categories in OpenProject are project-specific.

**API Endpoint:** `/api/v3/projects/{id}/categories`

**Implementation:**
1. Add function `getProjectCategories(projectId)` in `api_utils.js`
2. Add function `fillCategoriesSelect(projectId)` in `common.js`
3. Update categories when project selection changes
4. Add category select in HTML files

**Files to modify:**
- `thunderbird-openproject/scripts/api_utils.js`
- `thunderbird-openproject/scripts/common.js`
- `thunderbird-openproject/scripts/popup_message.js`
- `thunderbird-openproject/scripts/popup_compose.js`
- `thunderbird-openproject/popup_message.html`
- `thunderbird-openproject/popup_compose.html`

### 3.3 Work and Remaining Work Fields
**Implementation:**
1. Add input fields for work and remaining work
2. Default values: Work = 1, Remaining Work = same as Work
3. Display "hour" label to the right of each input
4. Include in task creation payload

**OpenProject API fields:**
- `estimatedTime` (ISO 8601 duration format, e.g., "PT1H" for 1 hour)
- `remainingTime` (ISO 8601 duration format)

**Files to modify:**
- `thunderbird-openproject/popup_message.html`
- `thunderbird-openproject/popup_compose.html`
- `thunderbird-openproject/scripts/api_utils.js`
- `thunderbird-openproject/popup.css`

---

## Phase 4: Internationalization

### 4.1 Add New Languages
**Languages to add:**
- Portuguese (pt) - Already exists
- French (fr) - Already exists
- German (de) - NEW
- Italian (it) - NEW
- Japanese (ja) - Already exists
- Korean (ko) - NEW
- Dutch (nl) - NEW (Netherlands has high OpenProject adoption)
- Polish (pl) - NEW (Large European population)
- Swedish (sv) - NEW (Nordic countries)

**New translation keys needed:**
```javascript
priority: "Priority",
category: "Category",
work: "Work",
remainingWork: "Remaining Work",
hour: "hour",
hours: "hours",
copyEmail: "Copy email",
selectPriority: "Select priority...",
selectCategory: "Select category..."
```

**Files to modify:**
- `thunderbird-openproject/scripts/i18n.js` - Add new translations
- `thunderbird-openproject/settings.html` - Add language options

---

## Implementation Order

1. **Bug Fixes** (Phase 1)
   - Fix dropdown placeholder behavior
   - Fix dropdown drag cursor issue

2. **Layout Redesign** (Phase 2)
   - Update CSS for two-column layout
   - Restructure HTML files
   - Remove header section
   - Reposition checkbox
   - Update button styling

3. **New Fields** (Phase 3)
   - Add Priority field
   - Add Category field (requires project selection callback)
   - Add Work and Remaining Work fields

4. **Internationalization** (Phase 4)
   - Add German, Italian, Korean translations
   - Add new translation keys for new fields

---

## Technical Considerations

### Thunderbird Layout Modes
The extension uses `message_display_action` which creates a popup panel. This panel is independent of Thunderbird's layout modes (classical, wide, vertical) as it appears as a dropdown from the toolbar button.

### Resizable Panel
Making the panel resizable would require:
- Custom JavaScript to handle resize events
- Storing user preferences for panel size
- This may degrade UX as it adds complexity

**Recommendation:** Use fixed width that accommodates all fields without scrolling.

### API Considerations
- Categories are project-specific and require loading when project changes
- Priority and Category may not be available in all OpenProject instances
- Need graceful fallbacks when these features are disabled

---

## Phase 5: Documentation

### 5.1 README.md Generation
Create a comprehensive README.md with:
- Extension description and features
- Installation instructions
- Configuration guide
- Screenshots/placeholders
- Supported languages list
- API requirements
- License information

### 5.2 Image Placeholders
Since images cannot be generated, create placeholder references:
```
![Task Panel](docs/images/task-panel.png)
![Settings Panel](docs/images/settings-panel.png)
```

---

## Missing Languages Analysis

**Currently supported:** English, Chinese, Spanish, Hindi, Arabic, Portuguese, Bengali, Russian, Japanese, French

**Recommended additions:**
| Language | Code | Rationale |
|----------|------|-----------|
| German | de | Largest EU economy, high OpenProject adoption |
| Italian | it | Major EU country |
| Korean | ko | Tech-savvy population |
| Dutch | nl | Netherlands has high OpenProject adoption |
| Polish | pl | Large EU population |
| Swedish | sv | Nordic countries, high tech adoption |

**Optional future additions:**
| Language | Code | Rationale |
|----------|------|-----------|
| Turkish | tr | Significant population |
| Indonesian | id | Large population, growing market |
| Vietnamese | vi | Growing tech market |
| Ukrainian | uk | Eastern Europe coverage |

---

## Files Summary

| File | Changes |
|------|---------|
| `popup.css` | Complete layout redesign, two-column, bug fixes |
| `popup_message.html` | Restructure for new layout, add new fields |
| `popup_compose.html` | Restructure for new layout, add new fields |
| `settings.html` | Add default priority, category settings |
| `common.js` | Add fill functions for new dropdowns, fix placeholder |
| `api_utils.js` | Add API calls for priorities, categories |
| `popup_message.js` | Add category loading on project change, copy body logic |
| `popup_compose.js` | Add category loading on project change |
| `settings.js` | Handle new default settings |
| `i18n.js` | Add new languages and translation keys |



## Implementation Complete

All requested changes have been implemented. Here's a summary:

### Bug Fixes
1. **Dropdown placeholder behavior** - Placeholders now use `disabled selected` attributes and are hidden when a selection is made
2. **Dropdown drag cursor issue** - Added `-webkit-user-drag: none` and `user-select: none` CSS properties
3. **Thunderbird compatibility** - Updated `strict_max_version` from "102.*" to "150.*"

### UI/UX Redesign
1. **Two-column layout** - Panel width increased to 520px with organized rows:
   - Row 1: Task + Project
   - Row 2: Assigned to + Responsible
   - Row 3: Description + "Copy email" checkbox
   - Row 4: Start Date + End Date
   - Row 5: Priority + Category
   - Row 6: Work + Remaining Work (with "hours" labels)
2. **Header removed** - No more icon/title taking up space
3. **Button styling** - Centered button with appropriate width
4. **Checkbox repositioned** - "Copy email" checkbox now below description

### New Features
1. **Priority field** - Dropdown populated from OpenProject API
2. **Category field** - Project-specific categories loaded dynamically
3. **Work fields** - Estimated work and remaining work with hour units
4. **6 new languages** - German, Italian, Korean, Dutch, Polish, Swedish (16 total)

### Files Modified
- [`thunderbird-openproject/manifest.json`](thunderbird-openproject/manifest.json) - Version compatibility
- [`thunderbird-openproject/popup.css`](thunderbird-openproject/popup.css) - Complete layout redesign
- [`thunderbird-openproject/popup_message.html`](thunderbird-openproject/popup_message.html) - New two-column layout
- [`thunderbird-openproject/popup_compose.html`](thunderbird-openproject/popup_compose.html) - New two-column layout
- [`thunderbird-openproject/settings.html`](thunderbird-openproject/settings.html) - Updated language options
- [`thunderbird-openproject/scripts/common.js`](thunderbird-openproject/scripts/common.js) - New fill functions, fixed placeholder handling
- [`thunderbird-openproject/scripts/api_utils.js`](thunderbird-openproject/scripts/api_utils.js) - Category API, work duration conversion
- [`thunderbird-openproject/scripts/popup_message.js`](thunderbird-openproject/scripts/popup_message.js) - Copy email logic, project change handler
- [`thunderbird-openproject/scripts/popup_compose.js`](thunderbird-openproject/scripts/popup_compose.js) - Project change handler
- [`thunderbird-openproject/scripts/i18n.js`](thunderbird-openproject/scripts/i18n.js) - 6 new languages, new translation keys
- [`README.md`](README.md) - Comprehensive documentation with image placeholders

### Image Placeholders
Created `docs/images/` directory for screenshots. You'll need to add:
- `banner.png` - Extension banner
- `task-panel.png` - Task creation panel screenshot
- `compose-panel.png` - Compose window panel screenshot
- `settings.png` - Settings page screenshot