function getSelectValue(selectid) {
    const select = document.getElementById(selectid);
    if (select && select.options[select.selectedIndex]) {
        return select.options[select.selectedIndex].value;
    }
    return "";
}

// Legacy aliases for backwards compatibility
function getSelectedProject(selectid) {
    return getSelectValue(selectid);
}

function getSelectedAssignee(selectid) {
    return getSelectValue(selectid);
}

function fillAllProjectsSelect(selectid, selectedValue) {
    const el = document.getElementById(selectid);
    
    // Clear existing options
    el.innerHTML = '';
    
    // Add placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = t('selectProject');
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.classList.add("placeholder");
    el.appendChild(placeholderOption);
    
    loadDefaultProject().then((selected) => {
        getAllProjects()
            .then((projects) => {
                function process(proj, indent) {
                    let option = document.createElement("option");
                    let text = "";
                    for (let i = 0; i < indent; i++) {
                        text += "   ";
                    }
                    option.textContent = text + proj.name;
                    option.value = proj.id;
                    if (proj.id == selected || proj.id == selectedValue) {
                        option.selected = true;
                        // Deselect placeholder when we have a selection
                        placeholderOption.selected = false;
                    }
                    el.appendChild(option);
                    proj.childs.forEach((child) => {
                        process(child, indent + 1);
                    });
                }
                projects.forEach((proj) => {
                    process(proj, 0);
                });
            })
            .catch((err) => {
                console.error("Failed to load projects:", err);
                el.innerHTML = '<option value="">' + t('couldNotConnect') + '</option>';
            });
    });
}

function fillAllAssigneesSelect(selectid, selectedValue) {
    const el = document.getElementById(selectid);
    
    // Clear existing options
    el.innerHTML = '';
    
    // Add placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = t('selectAssignee');
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.classList.add("placeholder");
    el.appendChild(placeholderOption);
    
    loadDefaultAssignee().then((selected) => {
        getAllUsers()
            .then((users) => {
                users.forEach((usr) => {
                    let option = document.createElement("option");
                    option.textContent = usr.name;
                    option.value = usr.id;
                    if (usr.id == selected || usr.id == selectedValue) {
                        option.selected = true;
                        placeholderOption.selected = false;
                    }
                    el.appendChild(option);
                });
            })
            .catch((err) => {
                console.error("Failed to load users:", err);
                el.innerHTML = '<option value="">' + t('couldNotConnect') + '</option>';
            });
    });
}

function fillAllResponsiblesSelect(selectid, selectedValue) {
    const el = document.getElementById(selectid);
    
    // Clear existing options
    el.innerHTML = '';
    
    // Add placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = t('selectResponsible');
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.classList.add("placeholder");
    el.appendChild(placeholderOption);
    
    // Load default responsible and populate select
    loadDefaultResponsible().then((defaultResponsible) => {
        const valueToSelect = selectedValue || defaultResponsible;
        
        getAllUsers()
            .then((users) => {
                users.forEach((usr) => {
                    let option = document.createElement("option");
                    option.textContent = usr.name;
                    option.value = usr.id;
                    if (usr.id == valueToSelect) {
                        option.selected = true;
                        placeholderOption.selected = false;
                    }
                    el.appendChild(option);
                });
            })
            .catch((err) => {
                console.error("Failed to load users:", err);
                el.innerHTML = '<option value="">' + t('couldNotConnect') + '</option>';
            });
    });
}

function fillAllPrioritiesSelect(selectid, selectedValue) {
    const el = document.getElementById(selectid);
    
    // Clear existing options
    el.innerHTML = '';
    
    // Add placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = t('selectPriority');
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.classList.add("placeholder");
    el.appendChild(placeholderOption);
    
    getAvailablePriorities()
        .then((priorities) => {
            priorities.forEach((priority) => {
                let option = document.createElement("option");
                option.textContent = priority.name;
                option.value = priority.id;
                if (priority.id == selectedValue) {
                    option.selected = true;
                    placeholderOption.selected = false;
                }
                el.appendChild(option);
            });
        })
        .catch((err) => {
            console.error("Failed to load priorities:", err);
            el.innerHTML = '<option value="">' + t('couldNotConnect') + '</option>';
        });
}

function fillCategoriesSelect(selectid, projectId, selectedValue) {
    const el = document.getElementById(selectid);
    
    // Clear existing options
    el.innerHTML = '';
    
    // Add placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = t('selectCategory');
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.classList.add("placeholder");
    el.appendChild(placeholderOption);
    
    if (!projectId) {
        return;
    }
    
    getProjectCategories(projectId)
        .then((categories) => {
            categories.forEach((category) => {
                let option = document.createElement("option");
                option.textContent = category.name;
                option.value = category.id;
                if (category.id == selectedValue) {
                    option.selected = true;
                    placeholderOption.selected = false;
                }
                el.appendChild(option);
            });
        })
        .catch((err) => {
            console.error("Failed to load categories:", err);
            el.innerHTML = '<option value="">' + t('couldNotConnect') + '</option>';
        });
}

function getDisplayedMessage() {
    return browser.tabs
        .query({
            active: true,
            currentWindow: true,
        })
        .then((tabs) =>
            browser.messageDisplay
                .getDisplayedMessage(tabs[0].id)
                .then((message) => [message, tabs[0].id])
        );
}

function findMessageBody(messageId) {
    function traversePart(part, contentType) {
        if (part.contentType.toLowerCase() === contentType) {
            return part.body;
        }
        for (const currentPart of part.parts || []) {
            const result = traversePart(currentPart, contentType);
            if (result !== undefined) {
                return result;
            }
        }
    }

    return browser.messages
        .getFull(messageId)
        .then(
            (fullMessage) =>
                traversePart(fullMessage, "text/plain") ||
                traversePart(fullMessage, "text/html")
        );
}

function formatDefaultTaskContent(message) {
    function twoDigits(num) {
        if (num < 10) {
            return "0" + num;
        }
        return num;
    }

    return loadDefaultContentFormat().then((contentFormat) =>
        contentFormat
            .replace("%author%", message.author)
            .replace("%subject%", message.subject)
            .replace("%date-Y%", message.date.getFullYear())
            .replace("%date-M%", message.date.getMonth() + 1)
            .replace("%date-D%", message.date.getDate())
            .replace("%date-h%", message.date.getHours())
            .replace("%date-m%", message.date.getMinutes())
            .replace("%date-s%", message.date.getSeconds())
            .replace("%date-YYYY%", message.date.getFullYear())
            .replace("%date-MM%", twoDigits(message.date.getMonth() + 1))
            .replace("%date-DD%", twoDigits(message.date.getDate()))
            .replace("%date-hh%", twoDigits(message.date.getHours()))
            .replace("%date-mm%", twoDigits(message.date.getMinutes()))
            .replace("%date-ss%", twoDigits(message.date.getSeconds()))
            .replace("%msgid%", message.headerMessageId)
    );
}

function showError(elementId, message) {
    const el = document.getElementById(elementId);
    el.textContent = message;
    el.classList.add('visible');
}

function hideError(elementId) {
    const el = document.getElementById(elementId);
    el.textContent = '';
    el.classList.remove('visible');
}

function showSuccessNotification(message) {
    // Create a notification using the Thunderbird notifications API
    browser.notifications.create({
        type: 'basic',
        iconUrl: 'images/icon.png',
        title: 'OpenProject',
        message: message
    });
}

function addTaskFromMessage(options) {
    const {
        contentId,
        projectSelector,
        assigneeSelector,
        responsibleSelector,
        descriptionId,
        startDateId,
        endDateId,
        prioritySelector,
        categorySelector,
        workId,
        remainingWorkId,
        errorId
    } = options;
    
    // Get form values
    const content = document.getElementById(contentId).value.trim();
    const project = getSelectValue(projectSelector);
    const assignee = getSelectValue(assigneeSelector);
    const responsible = getSelectValue(responsibleSelector);
    const description = document.getElementById(descriptionId)?.value.trim() || "";
    const startDate = document.getElementById(startDateId)?.value || "";
    const endDate = document.getElementById(endDateId)?.value || "";
    const priority = getSelectValue(prioritySelector);
    const category = getSelectValue(categorySelector);
    const work = parseFloat(document.getElementById(workId)?.value) || 1;
    const remainingWork = parseFloat(document.getElementById(remainingWorkId)?.value) || work;
    
    // Hide previous error
    hideError(errorId);
    
    // Validate required fields
    if (!content) {
        showError(errorId, t('errorNoTask'));
        return;
    }
    if (!project) {
        showError(errorId, t('errorNoProject'));
        return;
    }
    
    // Disable button to prevent double submission
    const addButton = document.getElementById('task_add');
    addButton.disabled = true;
    addButton.textContent = t('connecting');
    
    addTask(content, project, assignee, responsible, description, startDate, endDate, priority, category, work, remainingWork)
        .then((res) => {
            // Show success notification
            showSuccessNotification(t('taskCreated'));
            // Close the popup
            window.close();
        })
        .catch((err) => {
            console.error("Task creation failed:", err);
            const errorMsg = err?.message || t('taskCreationFailed');
            showError(errorId, errorMsg);
            
            // Re-enable button
            addButton.disabled = false;
            addButton.textContent = t('addTask');
        });
}
