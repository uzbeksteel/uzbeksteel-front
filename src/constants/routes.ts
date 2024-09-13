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
    personalCardDetailItem: '/personal-card/:id/intro-briefing',
    edit: 'edit/:id',
    initWorkTraining: '/personal-card/:id/init-work-training',
    orderReport: '/personal-card/:id/order-report',
    workPermission: '/personal-card/:id/work-permission',

    // admin routes
    admin: '/admin',
    adminWorkshop: '/admin/workshop',
    adminWorkshopBranches: 'branches',
    adminEmployees: '/admin/employees',
    adminAnalyticalData: '/admin/analytical-data',
    adminArchives: '/admin/archive',

    // work shop routes
    workshop: '/workshop',
    workshopGraphics: '/workshop/graphics',
    workshopEmployes: '/workshop/employes',
    workshopInspections: '/workshop/inspections',
    workshopInspectionsAdd: '/workshop/inspections/add',
    workshopDangers: '/workshop/dangers',
} as const;
