/**
 * Internationalization system for Thunderbird OpenProject Extension
 * 
 * This module provides multi-language support for the extension UI.
 * 
 * USAGE:
 * 1. Call initI18n() once at page load (typically in DOMContentLoaded handler)
 * 2. Use data-i18n="key" attributes on HTML elements for automatic translation
 * 3. Use t('key') function for programmatic translation
 * 
 * IMPORTANT: initI18n() should only be called once per page load.
 * To change language at runtime, use saveLanguage() then applyTranslations().
 */

const translations = {
    en: {
        // Task panel
        task: "Task",
        project: "Project",
        assignedTo: "Assigned to",
        responsible: "Responsible",
        description: "Description",
        startDate: "Start Date",
        endDate: "End Date",
        addTask: "Add Task",
        taskCreated: "Task created successfully",
        taskCreationFailed: "Task creation failed",
        selectProject: "Select a project...",
        selectAssignee: "Select assignee...",
        selectResponsible: "Select responsible...",
        errorNoProject: "Please select a project",
        errorNoTask: "Task subject is required",
        includeMessageBody: "Include message body as description",
        
        // Settings
        settings: "Settings",
        apiUrl: "API URL",
        apiKey: "API Key",
        apiKeyHelp: "API Key",
        saveToken: "Save Token",
        defaultProject: "Default Project",
        defaultAssignee: "Default Assignee",
        defaultResponsible: "Default Responsible",
        defaultTaskFormat: "Default Task Format",
        language: "Language",
        includeMessageBodyDefault: "Include message body as description by default",
        
        // Format parameters help
        formatHelp: "You can use the following parameters which get replaced by the value from the message:",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "Connecting...",
        couldNotConnect: "Could not connect to OpenProject",
        
        // Days and months for date formatting
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    
    zh: {
        // Task panel
        task: "任务",
        project: "项目",
        assignedTo: "分配给",
        responsible: "负责人",
        description: "描述",
        startDate: "开始日期",
        endDate: "结束日期",
        addTask: "添加任务",
        taskCreated: "任务创建成功",
        taskCreationFailed: "任务创建失败",
        selectProject: "选择项目...",
        selectAssignee: "选择分配人...",
        selectResponsible: "选择负责人...",
        errorNoProject: "请选择一个项目",
        errorNoTask: "任务主题是必需的",
        includeMessageBody: "将邮件正文包含为描述",
        
        // Settings
        settings: "设置",
        apiUrl: "API 网址",
        apiKey: "API 密钥",
        apiKeyHelp: "API 密钥",
        saveToken: "保存令牌",
        defaultProject: "默认项目",
        defaultAssignee: "默认分配人",
        defaultResponsible: "默认负责人",
        defaultTaskFormat: "默认任务格式",
        language: "语言",
        includeMessageBodyDefault: "默认将邮件正文包含为描述",
        
        // Format parameters help
        formatHelp: "您可以使用以下参数，这些参数将被邮件中的值替换：",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "连接中...",
        couldNotConnect: "无法连接到 OpenProject",
        
        // Days and months
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
    },
    
    es: {
        // Task panel
        task: "Tarea",
        project: "Proyecto",
        assignedTo: "Asignado a",
        responsible: "Responsable",
        description: "Descripción",
        startDate: "Fecha de inicio",
        endDate: "Fecha de fin",
        addTask: "Añadir tarea",
        taskCreated: "Tarea creada correctamente",
        taskCreationFailed: "Error al crear la tarea",
        selectProject: "Seleccionar proyecto...",
        selectAssignee: "Seleccionar asignado...",
        selectResponsible: "Seleccionar responsable...",
        errorNoProject: "Por favor, seleccione un proyecto",
        errorNoTask: "El asunto de la tarea es obligatorio",
        includeMessageBody: "Incluir cuerpo del mensaje como descripción",
        
        // Settings
        settings: "Configuración",
        apiUrl: "URL de la API",
        apiKey: "Clave API",
        apiKeyHelp: "Clave API",
        saveToken: "Guardar token",
        defaultProject: "Proyecto por defecto",
        defaultAssignee: "Asignado por defecto",
        defaultResponsible: "Responsable por defecto",
        defaultTaskFormat: "Formato de tarea por defecto",
        language: "Idioma",
        includeMessageBodyDefault: "Incluir cuerpo del mensaje como descripción por defecto",
        
        // Format parameters help
        formatHelp: "Puede usar los siguientes parámetros que serán reemplazados por valores del mensaje:",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "Conectando...",
        couldNotConnect: "No se pudo conectar a OpenProject",
        
        // Days and months
        days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    },
    
    hi: {
        // Task panel
        task: "कार्य",
        project: "परियोजना",
        assignedTo: "सौंपा गया",
        responsible: "जिम्मेदार",
        description: "विवरण",
        startDate: "प्रारंभ तिथि",
        endDate: "समाप्ति तिथि",
        addTask: "कार्य जोड़ें",
        taskCreated: "कार्य सफलतापूर्वक बनाया गया",
        taskCreationFailed: "कार्य बनाने में विफल",
        selectProject: "परियोजना चुनें...",
        selectAssignee: "सौंपने वाला चुनें...",
        selectResponsible: "जिम्मेदार चुनें...",
        errorNoProject: "कृपया एक परियोजना चुनें",
        errorNoTask: "कार्य विषय आवश्यक है",
        includeMessageBody: "संदेश निकाय को विवरण के रूप में शामिल करें",
        
        // Settings
        settings: "सेटिंग्स",
        apiUrl: "API URL",
        apiKey: "API कुंजी",
        apiKeyHelp: "API कुंजी",
        saveToken: "टोकन सहेजें",
        defaultProject: "डिफ़ॉल्ट परियोजना",
        defaultAssignee: "डिफ़ॉल्ट सौंपने वाला",
        defaultResponsible: "डिफ़ॉल्ट जिम्मेदार",
        defaultTaskFormat: "डिफ़ॉल्ट कार्य प्रारूप",
        language: "भाषा",
        includeMessageBodyDefault: "डिफ़ॉल्ट रूप से संदेश निकाय को विवरण के रूप में शामिल करें",
        
        // Format parameters help
        formatHelp: "आप निम्नलिखित पैरामीटर का उपयोग कर सकते हैं जिन्हें संदेश से मान से बदल दिया जाएगा:",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "कनेक्ट हो रहा है...",
        couldNotConnect: "OpenProject से कनेक्ट नहीं हो सका",
        
        // Days and months
        days: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
        months: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"]
    },
    
    ar: {
        // Task panel
        task: "مهمة",
        project: "مشروع",
        assignedTo: "مُسند إلى",
        responsible: "مسؤول",
        description: "وصف",
        startDate: "تاريخ البدء",
        endDate: "تاريخ الانتهاء",
        addTask: "إضافة مهمة",
        taskCreated: "تم إنشاء المهمة بنجاح",
        taskCreationFailed: "فشل إنشاء المهمة",
        selectProject: "اختر مشروعًا...",
        selectAssignee: "اختر مُسندًا إليه...",
        selectResponsible: "اختر مسؤولاً...",
        errorNoProject: "يرجى اختيار مشروع",
        errorNoTask: "موضوع المهمة مطلوب",
        includeMessageBody: "تضمين نص الرسالة كوصف",
        
        // Settings
        settings: "الإعدادات",
        apiUrl: "رابط API",
        apiKey: "مفتاح API",
        apiKeyHelp: "مفتاح API",
        saveToken: "حفظ الرمز",
        defaultProject: "المشروع الافتراضي",
        defaultAssignee: "المُسند إليه الافتراضي",
        defaultResponsible: "المسؤول الافتراضي",
        defaultTaskFormat: "تنسيق المهمة الافتراضي",
        language: "اللغة",
        includeMessageBodyDefault: "تضمين نص الرسالة كوصف بشكل افتراضي",
        
        // Format parameters help
        formatHelp: "يمكنك استخدام المعلمات التالية التي سيتم استبدالها بالقيمة من الرسالة:",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "جاري الاتصال...",
        couldNotConnect: "تعذر الاتصال بـ OpenProject",
        
        // Days and months
        days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
        months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
    },
    
    pt: {
        // Task panel
        task: "Tarefa",
        project: "Projeto",
        assignedTo: "Atribuído a",
        responsible: "Responsável",
        description: "Descrição",
        startDate: "Data de início",
        endDate: "Data de término",
        addTask: "Adicionar tarefa",
        taskCreated: "Tarefa criada com sucesso",
        taskCreationFailed: "Falha ao criar tarefa",
        selectProject: "Selecione um projeto...",
        selectAssignee: "Selecione um responsável...",
        selectResponsible: "Selecione um responsável...",
        errorNoProject: "Por favor, selecione um projeto",
        errorNoTask: "O assunto da tarefa é obrigatório",
        includeMessageBody: "Incluir corpo da mensagem como descrição",
        
        // Settings
        settings: "Configurações",
        apiUrl: "URL da API",
        apiKey: "Chave API",
        apiKeyHelp: "Chave API",
        saveToken: "Salvar token",
        defaultProject: "Projeto padrão",
        defaultAssignee: "Atribuído padrão",
        defaultResponsible: "Responsável padrão",
        defaultTaskFormat: "Formato de tarefa padrão",
        language: "Idioma",
        includeMessageBodyDefault: "Incluir corpo da mensagem como descrição por padrão",
        
        // Format parameters help
        formatHelp: "Você pode usar os seguintes parâmetros que serão substituídos pelo valor da mensagem:",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "Conectando...",
        couldNotConnect: "Não foi possível conectar ao OpenProject",
        
        // Days and months
        days: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    },
    
    bn: {
        // Task panel
        task: "কাজ",
        project: "প্রকল্প",
        assignedTo: "ন্যস্ত",
        responsible: "দায়িত্বপ্রাপ্ত",
        description: "বিবরণ",
        startDate: "শুরুর তারিখ",
        endDate: "শেষের তারিখ",
        addTask: "কাজ যোগ করুন",
        taskCreated: "কাজ সফলভাবে তৈরি হয়েছে",
        taskCreationFailed: "কাজ তৈরি ব্যর্থ হয়েছে",
        selectProject: "একটি প্রকল্প নির্বাচন করুন...",
        selectAssignee: "ন্যস্তকারী নির্বাচন করুন...",
        selectResponsible: "দায়িত্বপ্রাপ্ত নির্বাচন করুন...",
        errorNoProject: "অনুগ্রহ করে একটি প্রকল্প নির্বাচন করুন",
        errorNoTask: "কাজের বিষয় প্রয়োজন",
        includeMessageBody: "বিবরণ হিসাবে বার্তা বডি অন্তর্ভুক্ত করুন",
        
        // Settings
        settings: "সেটিংস",
        apiUrl: "API URL",
        apiKey: "API কী",
        apiKeyHelp: "API কী",
        saveToken: "টোকেন সংরক্ষণ করুন",
        defaultProject: "ডিফল্ট প্রকল্প",
        defaultAssignee: "ডিফল্ট ন্যস্তকারী",
        defaultResponsible: "ডিফল্ট দায়িত্বপ্রাপ্ত",
        defaultTaskFormat: "ডিফল্ট কাজের বিন্যাস",
        language: "ভাষা",
        includeMessageBodyDefault: "ডিফল্টরূপে বিবরণ হিসাবে বার্তা বডি অন্তর্ভুক্ত করুন",
        
        // Format parameters help
        formatHelp: "আপনি নিম্নলিখিত প্যারামিটার ব্যবহার করতে পারেন যা বার্তা থেকে মান দ্বারা প্রতিস্থাপিত হবে:",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "সংযোগ করা হচ্ছে...",
        couldNotConnect: "OpenProject-এ সংযোগ করতে পারেনি",
        
        // Days and months
        days: ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"],
        months: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"]
    },
    
    ru: {
        // Task panel
        task: "Задача",
        project: "Проект",
        assignedTo: "Назначено",
        responsible: "Ответственный",
        description: "Описание",
        startDate: "Дата начала",
        endDate: "Дата окончания",
        addTask: "Добавить задачу",
        taskCreated: "Задача успешно создана",
        taskCreationFailed: "Ошибка создания задачи",
        selectProject: "Выберите проект...",
        selectAssignee: "Выберите исполнителя...",
        selectResponsible: "Выберите ответственного...",
        errorNoProject: "Пожалуйста, выберите проект",
        errorNoTask: "Тема задачи обязательна",
        includeMessageBody: "Включить тело сообщения как описание",
        
        // Settings
        settings: "Настройки",
        apiUrl: "URL API",
        apiKey: "Ключ API",
        apiKeyHelp: "Ключ API",
        saveToken: "Сохранить токен",
        defaultProject: "Проект по умолчанию",
        defaultAssignee: "Исполнитель по умолчанию",
        defaultResponsible: "Ответственный по умолчанию",
        defaultTaskFormat: "Формат задачи по умолчанию",
        language: "Язык",
        includeMessageBodyDefault: "Включать тело сообщения как описание по умолчанию",
        
        // Format parameters help
        formatHelp: "Вы можете использовать следующие параметры, которые будут заменены значениями из сообщения:",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "Подключение...",
        couldNotConnect: "Не удалось подключиться к OpenProject",
        
        // Days and months
        days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    },
    
    ja: {
        // Task panel
        task: "タスク",
        project: "プロジェクト",
        assignedTo: "担当者",
        responsible: "責任者",
        description: "説明",
        startDate: "開始日",
        endDate: "終了日",
        addTask: "タスクを追加",
        taskCreated: "タスクが正常に作成されました",
        taskCreationFailed: "タスクの作成に失敗しました",
        selectProject: "プロジェクトを選択...",
        selectAssignee: "担当者を選択...",
        selectResponsible: "責任者を選択...",
        errorNoProject: "プロジェクトを選択してください",
        errorNoTask: "タスクの件名は必須です",
        includeMessageBody: "メッセージ本文を説明として含める",
        
        // Settings
        settings: "設定",
        apiUrl: "API URL",
        apiKey: "APIキー",
        apiKeyHelp: "APIキー",
        saveToken: "トークンを保存",
        defaultProject: "デフォルトプロジェクト",
        defaultAssignee: "デフォルト担当者",
        defaultResponsible: "デフォルト責任者",
        defaultTaskFormat: "デフォルトタスク形式",
        language: "言語",
        includeMessageBodyDefault: "デフォルトでメッセージ本文を説明として含める",
        
        // Format parameters help
        formatHelp: "メッセージの値に置き換えられる次のパラメータを使用できます：",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "接続中...",
        couldNotConnect: "OpenProjectに接続できませんでした",
        
        // Days and months
        days: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
        months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
    },
    
    fr: {
        // Task panel
        task: "Tâche",
        project: "Projet",
        assignedTo: "Assigné à",
        responsible: "Responsable",
        description: "Description",
        startDate: "Date de début",
        endDate: "Date de fin",
        addTask: "Ajouter une tâche",
        taskCreated: "Tâche créée avec succès",
        taskCreationFailed: "Échec de la création de la tâche",
        selectProject: "Sélectionner un projet...",
        selectAssignee: "Sélectionner un assigné...",
        selectResponsible: "Sélectionner un responsable...",
        errorNoProject: "Veuillez sélectionner un projet",
        errorNoTask: "Le sujet de la tâche est requis",
        includeMessageBody: "Inclure le corps du message comme description",
        
        // Settings
        settings: "Paramètres",
        apiUrl: "URL de l'API",
        apiKey: "Clé API",
        apiKeyHelp: "Clé API",
        saveToken: "Enregistrer le jeton",
        defaultProject: "Projet par défaut",
        defaultAssignee: "Assigné par défaut",
        defaultResponsible: "Responsable par défaut",
        defaultTaskFormat: "Format de tâche par défaut",
        language: "Langue",
        includeMessageBodyDefault: "Inclure le corps du message comme description par défaut",
        
        // Format parameters help
        formatHelp: "Vous pouvez utiliser les paramètres suivants qui seront remplacés par la valeur du message :",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "Connexion...",
        couldNotConnect: "Impossible de se connecter à OpenProject",
        
        // Days and months
        days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    }
};

// Default language
let currentLanguage = 'en';

// Load language from storage
async function loadLanguage() {
    const result = await browser.storage.local.get('language');
    currentLanguage = result.language || 'en';
    return currentLanguage;
}

// Save language to storage
async function saveLanguage(lang) {
    await browser.storage.local.set({ language: lang });
    currentLanguage = lang;
}

// Get translation for a key
function t(key) {
    const lang = translations[currentLanguage] || translations.en;
    return lang[key] || translations.en[key] || key;
}

// Apply translations to the current page
function applyTranslations() {
    // Find all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (element.tagName === 'INPUT' && element.type === 'text') {
            element.placeholder = t(key);
        } else {
            element.textContent = t(key);
        }
    });
    
    // Find all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });
    
    // Find all elements with data-i18n-title attribute
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        element.title = t(key);
    });
}

// Initialize i18n on page load
async function initI18n() {
    await loadLanguage();
    applyTranslations();
}

// Get today's date in YYYY-MM-DD format
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
