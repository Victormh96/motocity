const communityRoutes = [
    {
        path: '/',
        name: 'Inicio',
        component: () => import("@/views/community/ViewInicio.vue")
    },

    {
        path: '/producto/:slug',
        name: 'Producto',
        component: () => import("@/views/community/ViewProducto.vue"),
        props: true
    },

    {
        path: '/busqueda/:slug',
        name: 'Busqueda',
        component: () => import("@/views/community/ViewBusqueda.vue"),
        props: true
    },
]

// Exports
export {
    communityRoutes
}