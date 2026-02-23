function messageAddTask() {
    addTaskFromMessage({
        contentId: 'task_content',
        projectSelector: 'task_project',
        assigneeSelector: 'task_assignee',
        responsibleSelector: 'task_responsible',
        descriptionId: 'task_description',
        startDateId: 'task_start_date',
        endDateId: 'task_end_date',
        includeBodyId: 'include_message_body',
        errorId: 'task_error'
    });
}

function prefillContent() {
    // Initialize i18n first
    initI18n().then(() => {
        // Apply translations
        applyTranslations();
        
        // Fill dropdowns
        fillAllProjectsSelect('task_project');
        fillAllAssigneesSelect('task_assignee');
        fillAllResponsiblesSelect('task_responsible');
        
        // Set default dates
        document.getElementById('task_start_date').value = getTodayDate();
        
        // Load include message body preference
        loadIncludeMessageBody().then((res) => {
            document.getElementById('include_message_body').checked = res;
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
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task_add').addEventListener('click', messageAddTask);
    showSettingsIfNecessary();
    prefillContent();
});
