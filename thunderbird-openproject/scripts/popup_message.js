// Detect Thunderbird layout mode and adjust panel accordingly
async function detectLayoutMode() {
    try {
        // Get the current window
        const tabs = await browser.tabs.query({ active: true, currentWindow: true });
        if (tabs && tabs.length > 0) {
            // Check if we're in vertical view by examining the window dimensions
            // In vertical layout, the message pane is typically narrower
            const window = await browser.windows.getCurrent();
            
            // If window height is significantly greater than width, likely vertical mode
            // This is a heuristic - Thunderbird doesn't expose layout mode directly
            if (window.height > window.width * 1.5) {
                document.body.classList.add('vertical-layout');
            }
        }
    } catch (e) {
        console.log('Could not detect layout mode:', e);
    }
}

function messageAddTask() {
    addTaskFromMessage({
        contentId: 'task_content',
        projectSelector: 'task_project',
        assigneeSelector: 'task_assignee',
        responsibleSelector: 'task_responsible',
        descriptionId: 'task_description',
        startDateId: 'task_start_date',
        endDateId: 'task_end_date',
        prioritySelector: 'task_priority',
        categorySelector: 'task_category',
        workId: 'task_work',
        remainingWorkId: 'task_remaining_work',
        errorId: 'task_error'
    });
}

// Handle project change to update categories
function onProjectChange() {
    const projectId = getSelectValue('task_project');
    fillCategoriesSelect('task_category', projectId);
}

// Handle copy email checkbox
function onCopyEmailChange() {
    const checkbox = document.getElementById('copy_email_body');
    const descriptionField = document.getElementById('task_description');
    
    if (checkbox.checked) {
        // Get message body and add to description
        getDisplayedMessage()
            .then(([message]) => {
                return findMessageBody(message.id);
            })
            .then((body) => {
                if (body) {
                    const currentDescription = descriptionField.value.trim();
                    if (currentDescription) {
                        descriptionField.value = currentDescription + "\n\n" + body;
                    } else {
                        descriptionField.value = body;
                    }
                }
            })
            .catch((err) => {
                console.error('Failed to get message body:', err);
            });
    }
}

// Sync remaining work with work when work changes
function onWorkChange() {
    const workInput = document.getElementById('task_work');
    const remainingInput = document.getElementById('task_remaining_work');
    
    // If remaining work equals old work value, sync them
    if (remainingInput.value == remainingInput.defaultValue || 
        parseFloat(remainingInput.value) === parseFloat(workInput.defaultValue)) {
        remainingInput.value = workInput.value;
    }
}

function prefillContent() {
    // Initialize i18n first
    initI18n().then(() => {
        // Apply translations
        applyTranslations();
        
        // Detect layout mode and adjust panel
        detectLayoutMode();
        
        // Fill dropdowns
        fillAllProjectsSelect('task_project');
        fillAllAssigneesSelect('task_assignee');
        fillAllResponsiblesSelect('task_responsible');
        fillAllPrioritiesSelect('task_priority');
        
        // Set default dates
        document.getElementById('task_start_date').value = getTodayDate();
        
        // Load include message body preference
        loadIncludeMessageBody().then((res) => {
            document.getElementById('copy_email_body').checked = res;
        });
        
        // Get message and prefill task content
        getDisplayedMessage()
            .then(([message, tabId]) => {
                return formatDefaultTaskContent(message);
            })
            .then((defaultTaskContent) => {
                document.getElementById('task_content').value = defaultTaskContent;
            })
            .catch((err) => {
                console.error('Failed to prefill content:', err);
            });
        
        // Add event listener for project change to update categories
        document.getElementById('task_project').addEventListener('change', onProjectChange);
        
        // Add event listener for copy email checkbox
        document.getElementById('copy_email_body').addEventListener('change', onCopyEmailChange);
        
        // Add event listener for work input to sync remaining work
        document.getElementById('task_work').addEventListener('change', onWorkChange);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task_add').addEventListener('click', messageAddTask);
    showSettingsIfNecessary();
    prefillContent();
});
