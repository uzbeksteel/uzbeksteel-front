export const ROUTES = {
    // tb routes
    tb: '/tb',
    home: '/',
    all: '*',
    add: 'add',
    single: ':id',
    login: '/login',
    forgot: 'forgot',
    graphics: '/graphics',
    deeds: '/deeds',
    lows: '/lows',
    certification: '/certification',
    accidents: '/accidents',
    magazine: '/magazine',
    dangers: '/dangers',
    personalCard: '/personal-card',
    profession: '/profession',
    personalCardDetailItem: '/personal-card/:id/intro-briefing',
    edit: 'edit/:id',
    initWorkTraining: '/personal-card/:id/init-work-training',
    orderReport: '/personal-card/:id/order-report',
    workPermission: '/personal-card/:id/work-permission',
    safetyInfo: '/personal-card/:id/safety-info',
    repeatBriefing: '/personal-card/:id/repeat-briefing',
    emergancyBriefing: '/personal-card/:id/emergancy-briefing',
    educationInfo: '/personal-card/:id/education-info',
    safetyNotes: '/personal-card/:id/safety-notes',
    healthResult: '/personal-card/:id/health-result',
    accidentDetails: '/accidents/:id/details',
    highDangers: '/high-dangers',
    highDangersDetails: '/high-dangers/:id/details',
    highDangerLicenceAdd: '/high-dangers/:id/licence/add',

    // admin routes
    admin: '/admin',
    adminWorkshop: '/admin/workshop',
    adminWorkshopBranches: 'branches',
    adminEmployees: '/admin/employees',
    adminAnalyticalData: '/admin/analytical-data',
    adminArchives: '/admin/archive',
    addWorkshopBranchMaster: 'add-master',

    // work shop routes
    workshop: '/workshop',
    workshopGraphics: '/workshop/graphics',
    workshopEmployes: '/workshop/employes',
    workshopInspections: '/workshop/inspections',
    workshopInspectionsAdd: '/workshop/inspections/add',
    workshopDangers: '/workshop/dangers',
    workshopAccidents: '/workshop/accidents',
    workshopAccidentsActAdd: '/workshop/accidents/act-add',
    workshopAccidentsOrderAdd: '/workshop/accidents/order-add',
    workshopPersonalCard: '/workshop/personal-card',
    personalCard2: 'personal-card',
    workshopHealthResult: 'health-result',
    workshopAccidentDetails: ':id/details',
    workshopSafetyNotes: 'safety-notes',
    workshopEducationInfo: 'education-info',
    workshopRepeatBriefing: 'repeat-briefing',
    workshopEmergancyBriefing2: 'personal-card/:id/emergancy-briefing',
    workShopSafetyInf: 'safety-info',
    workShopWorkPermission: 'work-permission',
    workShopOrderReport: 'order-report',
    workShopInitWorkTraining: 'init-work-training',
    workshopIntroBriefing: 'intro-briefing',
    workshopEmergancyBriefing: 'emergancy-briefing',
    workshopHighDangers: '/workshop/workshop-high-danger',
    workshopHighDangersDetails: ':id/details',
    workshopHighDangerLicenceAdd: ':id/licence/add',
} as const;
