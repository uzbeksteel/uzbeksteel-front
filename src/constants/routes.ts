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

    // admin routes
    admin: '/admin',
    adminWorkshop: '/admin/workshop',
    adminEmployees: '/admin/employees',
    adminAnalyticalData: '/admin/analytical-data',
    adminArchives: '/admin/archive',

    // work shop routes
    workshop: '/workshop',
    workshopGraphics: '/workshop/graphics',
    workshopEmployes: '/workshop/employes',
    workshopInspections: '/workshop/inspections',
} as const;
