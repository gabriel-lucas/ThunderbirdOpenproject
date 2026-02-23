function composeAddTask() {
    addTaskFromMessage({
        contentId: 'task_content',
        projectSelector: 'task_project',
        assigneeSelector: 'task_assignee',
        responsibleSelector: 'task_responsible',
        descriptionId: 'task_description',
        startDateId: 'task_start_date',
        endDateId: 'task_end_date',
        includeBodyId: null, // No message body for compose
        errorId: 'task_error'
    });
}

function prefillComposeContent() {
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
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task_add').addEventListener('click', composeAddTask);
    showSettingsIfNecessary();
    prefillComposeContent();
});
