const adminRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import("@/views/admin/ViewInicio.vue")
    },

    {
        path: '/add',
        name: 'Add',
        component: () => import("@/views/admin/ViewAdd.vue")
    },

    {
        path: '/update/:id',
        name: 'Update',
        component: () => import("@/views/admin/ViewUpdate.vue"),
        props: true
    },
]

// Exports
export {
    adminRoutes
}