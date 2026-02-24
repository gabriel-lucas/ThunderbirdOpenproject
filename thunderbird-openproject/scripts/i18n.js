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
        selectPriority: "Select priority...",
        selectCategory: "Select category...",
        errorNoProject: "Please select a project",
        errorNoTask: "Task subject is required",
        copyEmail: "Copy email",
        
        // New fields
        priority: "Priority",
        category: "Category",
        work: "Work",
        remainingWork: "Remaining Work",
        hours: "hours",
        
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
        selectPriority: "选择优先级...",
        selectCategory: "选择类别...",
        errorNoProject: "请选择一个项目",
        errorNoTask: "任务主题是必需的",
        copyEmail: "复制邮件",
        
        // New fields
        priority: "优先级",
        category: "类别",
        work: "工作量",
        remainingWork: "剩余工作量",
        hours: "小时",
        
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
        selectPriority: "Seleccionar prioridad...",
        selectCategory: "Seleccionar categoría...",
        errorNoProject: "Por favor, seleccione un proyecto",
        errorNoTask: "El asunto de la tarea es obligatorio",
        copyEmail: "Copiar correo",
        
        // New fields
        priority: "Prioridad",
        category: "Categoría",
        work: "Trabajo",
        remainingWork: "Trabajo restante",
        hours: "horas",
        
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
        selectPriority: "प्राथमिकता चुनें...",
        selectCategory: "श्रेणी चुनें...",
        errorNoProject: "कृपया एक परियोजना चुनें",
        errorNoTask: "कार्य विषय आवश्यक है",
        copyEmail: "ईमेल कॉपी करें",
        
        // New fields
        priority: "प्राथमिकता",
        category: "श्रेणी",
        work: "कार्य",
        remainingWork: "शेष कार्य",
        hours: "घंटे",
        
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
        selectPriority: "اختر أولوية...",
        selectCategory: "اختر فئة...",
        errorNoProject: "يرجى اختيار مشروع",
        errorNoTask: "موضوع المهمة مطلوب",
        copyEmail: "نسخ البريد",
        
        // New fields
        priority: "الأولوية",
        category: "الفئة",
        work: "العمل",
        remainingWork: "العمل المتبقي",
        hours: "ساعات",
        
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
        selectPriority: "Selecione uma prioridade...",
        selectCategory: "Selecione uma categoria...",
        errorNoProject: "Por favor, selecione um projeto",
        errorNoTask: "O assunto da tarefa é obrigatório",
        copyEmail: "Copiar e-mail",
        
        // New fields
        priority: "Prioridade",
        category: "Categoria",
        work: "Trabalho",
        remainingWork: "Trabalho restante",
        hours: "horas",
        
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
        selectPriority: "অগ্রাধিকার নির্বাচন করুন...",
        selectCategory: "বিভাগ নির্বাচন করুন...",
        errorNoProject: "অনুগ্রহ করে একটি প্রকল্প নির্বাচন করুন",
        errorNoTask: "কাজের বিষয় প্রয়োজন",
        copyEmail: "ইমেইল কপি করুন",
        
        // New fields
        priority: "অগ্রাধিকার",
        category: "বিভাগ",
        work: "কাজ",
        remainingWork: "অবশিষ্ট কাজ",
        hours: "ঘন্টা",
        
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
        selectPriority: "Выберите приоритет...",
        selectCategory: "Выберите категорию...",
        errorNoProject: "Пожалуйста, выберите проект",
        errorNoTask: "Тема задачи обязательна",
        copyEmail: "Копировать письмо",
        
        // New fields
        priority: "Приоритет",
        category: "Категория",
        work: "Работа",
        remainingWork: "Оставшаяся работа",
        hours: "часов",
        
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
        selectPriority: "優先度を選択...",
        selectCategory: "カテゴリを選択...",
        errorNoProject: "プロジェクトを選択してください",
        errorNoTask: "タスクの件名は必須です",
        copyEmail: "メールをコピー",
        
        // New fields
        priority: "優先度",
        category: "カテゴリ",
        work: "作業",
        remainingWork: "残作業",
        hours: "時間",
        
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
        selectPriority: "Sélectionner une priorité...",
        selectCategory: "Sélectionner une catégorie...",
        errorNoProject: "Veuillez sélectionner un projet",
        errorNoTask: "Le sujet de la tâche est requis",
        copyEmail: "Copier l'email",
        
        // New fields
        priority: "Priorité",
        category: "Catégorie",
        work: "Travail",
        remainingWork: "Travail restant",
        hours: "heures",
        
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
    },
    
    de: {
        // Task panel
        task: "Aufgabe",
        project: "Projekt",
        assignedTo: "Zugewiesen an",
        responsible: "Verantwortlich",
        description: "Beschreibung",
        startDate: "Startdatum",
        endDate: "Enddatum",
        addTask: "Aufgabe hinzufügen",
        taskCreated: "Aufgabe erfolgreich erstellt",
        taskCreationFailed: "Fehler beim Erstellen der Aufgabe",
        selectProject: "Projekt auswählen...",
        selectAssignee: "Zugewiesenen auswählen...",
        selectResponsible: "Verantwortlichen auswählen...",
        selectPriority: "Priorität auswählen...",
        selectCategory: "Kategorie auswählen...",
        errorNoProject: "Bitte wählen Sie ein Projekt",
        errorNoTask: "Aufgabenbetreff ist erforderlich",
        copyEmail: "E-Mail kopieren",
        
        // New fields
        priority: "Priorität",
        category: "Kategorie",
        work: "Arbeit",
        remainingWork: "Verbleibende Arbeit",
        hours: "Stunden",
        
        // Settings
        settings: "Einstellungen",
        apiUrl: "API-URL",
        apiKey: "API-Schlüssel",
        apiKeyHelp: "API-Schlüssel",
        saveToken: "Token speichern",
        defaultProject: "Standardprojekt",
        defaultAssignee: "Standardzugewiesener",
        defaultResponsible: "Standardverantwortlicher",
        defaultTaskFormat: "Standardaufgabenformat",
        language: "Sprache",
        includeMessageBodyDefault: "Nachrichtentext standardmäßig als Beschreibung einfügen",
        
        // Format parameters help
        formatHelp: "Sie können folgende Parameter verwenden, die durch Werte aus der Nachricht ersetzt werden:",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "Verbinde...",
        couldNotConnect: "Konnte keine Verbindung zu OpenProject herstellen",
        
        // Days and months
        days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
    },
    
    it: {
        // Task panel
        task: "Attività",
        project: "Progetto",
        assignedTo: "Assegnato a",
        responsible: "Responsabile",
        description: "Descrizione",
        startDate: "Data inizio",
        endDate: "Data fine",
        addTask: "Aggiungi attività",
        taskCreated: "Attività creata con successo",
        taskCreationFailed: "Creazione attività fallita",
        selectProject: "Seleziona progetto...",
        selectAssignee: "Seleziona assegnatario...",
        selectResponsible: "Seleziona responsabile...",
        selectPriority: "Seleziona priorità...",
        selectCategory: "Seleziona categoria...",
        errorNoProject: "Selezionare un progetto",
        errorNoTask: "L'oggetto dell'attività è obbligatorio",
        copyEmail: "Copia email",
        
        // New fields
        priority: "Priorità",
        category: "Categoria",
        work: "Lavoro",
        remainingWork: "Lavoro rimanente",
        hours: "ore",
        
        // Settings
        settings: "Impostazioni",
        apiUrl: "URL API",
        apiKey: "Chiave API",
        apiKeyHelp: "Chiave API",
        saveToken: "Salva token",
        defaultProject: "Progetto predefinito",
        defaultAssignee: "Assegnatario predefinito",
        defaultResponsible: "Responsabile predefinito",
        defaultTaskFormat: "Formato attività predefinito",
        language: "Lingua",
        includeMessageBodyDefault: "Includi corpo del messaggio come descrizione per impostazione predefinita",
        
        // Format parameters help
        formatHelp: "Puoi usare i seguenti parametri che verranno sostituiti dai valori del messaggio:",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "Connessione...",
        couldNotConnect: "Impossibile connettersi a OpenProject",
        
        // Days and months
        days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
        months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
    },
    
    ko: {
        // Task panel
        task: "작업",
        project: "프로젝트",
        assignedTo: "담당자",
        responsible: "책임자",
        description: "설명",
        startDate: "시작일",
        endDate: "종료일",
        addTask: "작업 추가",
        taskCreated: "작업이 성공적으로 생성되었습니다",
        taskCreationFailed: "작업 생성 실패",
        selectProject: "프로젝트 선택...",
        selectAssignee: "담당자 선택...",
        selectResponsible: "책임자 선택...",
        selectPriority: "우선순위 선택...",
        selectCategory: "카테고리 선택...",
        errorNoProject: "프로젝트를 선택하세요",
        errorNoTask: "작업 제목은 필수입니다",
        copyEmail: "이메일 복사",
        
        // New fields
        priority: "우선순위",
        category: "카테고리",
        work: "작업",
        remainingWork: "남은 작업",
        hours: "시간",
        
        // Settings
        settings: "설정",
        apiUrl: "API URL",
        apiKey: "API 키",
        apiKeyHelp: "API 키",
        saveToken: "토큰 저장",
        defaultProject: "기본 프로젝트",
        defaultAssignee: "기본 담당자",
        defaultResponsible: "기본 책임자",
        defaultTaskFormat: "기본 작업 형식",
        language: "언어",
        includeMessageBodyDefault: "기본적으로 메시지 본문을 설명으로 포함",
        
        // Format parameters help
        formatHelp: "메시지 값으로 대체되는 다음 매개변수를 사용할 수 있습니다:",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "연결 중...",
        couldNotConnect: "OpenProject에 연결할 수 없습니다",
        
        // Days and months
        days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
    },
    
    nl: {
        // Task panel
        task: "Taak",
        project: "Project",
        assignedTo: "Toegewezen aan",
        responsible: "Verantwoordelijke",
        description: "Beschrijving",
        startDate: "Startdatum",
        endDate: "Einddatum",
        addTask: "Taak toevoegen",
        taskCreated: "Taak succesvol aangemaakt",
        taskCreationFailed: "Taak aanmaken mislukt",
        selectProject: "Selecteer project...",
        selectAssignee: "Selecteer toegewezen...",
        selectResponsible: "Selecteer verantwoordelijke...",
        selectPriority: "Selecteer prioriteit...",
        selectCategory: "Selecteer categorie...",
        errorNoProject: "Selecteer een project",
        errorNoTask: "Taakonderwerp is vereist",
        copyEmail: "E-mail kopiëren",
        
        // New fields
        priority: "Prioriteit",
        category: "Categorie",
        work: "Werk",
        remainingWork: "Resterend werk",
        hours: "uren",
        
        // Settings
        settings: "Instellingen",
        apiUrl: "API URL",
        apiKey: "API-sleutel",
        apiKeyHelp: "API-sleutel",
        saveToken: "Token opslaan",
        defaultProject: "Standaardproject",
        defaultAssignee: "Standaard toegewezen",
        defaultResponsible: "Standaard verantwoordelijke",
        defaultTaskFormat: "Standaard taakformaat",
        language: "Taal",
        includeMessageBodyDefault: "Berichttekst standaard als beschrijving toevoegen",
        
        // Format parameters help
        formatHelp: "U kunt de volgende parameters gebruiken die worden vervangen door de waarde uit het bericht:",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "Verbinden...",
        couldNotConnect: "Kon geen verbinding maken met OpenProject",
        
        // Days and months
        days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
        months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]
    },
    
    pl: {
        // Task panel
        task: "Zadanie",
        project: "Projekt",
        assignedTo: "Przypisane do",
        responsible: "Odpowiedzialny",
        description: "Opis",
        startDate: "Data rozpoczęcia",
        endDate: "Data zakończenia",
        addTask: "Dodaj zadanie",
        taskCreated: "Zadanie utworzone pomyślnie",
        taskCreationFailed: "Błąd tworzenia zadania",
        selectProject: "Wybierz projekt...",
        selectAssignee: "Wybierz przypisanego...",
        selectResponsible: "Wybierz odpowiedzialnego...",
        selectPriority: "Wybierz priorytet...",
        selectCategory: "Wybierz kategorię...",
        errorNoProject: "Wybierz projekt",
        errorNoTask: "Temat zadania jest wymagany",
        copyEmail: "Kopiuj e-mail",
        
        // New fields
        priority: "Priorytet",
        category: "Kategoria",
        work: "Praca",
        remainingWork: "Pozostała praca",
        hours: "godzin",
        
        // Settings
        settings: "Ustawienia",
        apiUrl: "URL API",
        apiKey: "Klucz API",
        apiKeyHelp: "Klucz API",
        saveToken: "Zapisz token",
        defaultProject: "Domyślny projekt",
        defaultAssignee: "Domyślnie przypisany",
        defaultResponsible: "Domyślnie odpowiedzialny",
        defaultTaskFormat: "Domyślny format zadania",
        language: "Język",
        includeMessageBodyDefault: "Domyślnie dołącz treść wiadomości jako opis",
        
        // Format parameters help
        formatHelp: "Możesz użyć następujących parametrów, które zostaną zastąpione wartościami z wiadomości:",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "Łączenie...",
        couldNotConnect: "Nie można połączyć się z OpenProject",
        
        // Days and months
        days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
        months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]
    },
    
    sv: {
        // Task panel
        task: "Uppgift",
        project: "Projekt",
        assignedTo: "Tilldelad till",
        responsible: "Ansvarig",
        description: "Beskrivning",
        startDate: "Startdatum",
        endDate: "Slutdatum",
        addTask: "Lägg till uppgift",
        taskCreated: "Uppgift skapad",
        taskCreationFailed: "Kunde inte skapa uppgift",
        selectProject: "Välj projekt...",
        selectAssignee: "Välj tilldelad...",
        selectResponsible: "Välj ansvarig...",
        selectPriority: "Välj prioritet...",
        selectCategory: "Välj kategori...",
        errorNoProject: "Välj ett projekt",
        errorNoTask: "Uppgiftens ämne krävs",
        copyEmail: "Kopiera e-post",
        
        // New fields
        priority: "Prioritet",
        category: "Kategori",
        work: "Arbete",
        remainingWork: "Återstående arbete",
        hours: "timmar",
        
        // Settings
        settings: "Inställningar",
        apiUrl: "API-URL",
        apiKey: "API-nyckel",
        apiKeyHelp: "API-nyckel",
        saveToken: "Spara token",
        defaultProject: "Standardprojekt",
        defaultAssignee: "Standard tilldelad",
        defaultResponsible: "Standard ansvarig",
        defaultTaskFormat: "Standardformat för uppgift",
        language: "Språk",
        includeMessageBodyDefault: "Inkludera meddelandetext som beskrivning som standard",
        
        // Format parameters help
        formatHelp: "Du kan använda följande parametrar som ersätts med värden från meddelandet:",
        formatParams: "%author%, %subject%, %msgid%, %date-Y%, %date-M%, %date-D%, %date-h%, %date-m%, %date-s%, %date-YYYY%, %date-MM%, %date-DD%, %date-hh%, %date-mm%, %date-ss%",
        
        // Messages
        connecting: "Ansluter...",
        couldNotConnect: "Kunde inte ansluta till OpenProject",
        
        // Days and months
        days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
        months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
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
