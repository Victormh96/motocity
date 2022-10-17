const userRoutes = [
    {
        path: '/tienda',
        name: 'AuhInicio',
        component: () => import("@/views/user/ViewInicio.vue")
    },

    {
        path: '/tienda/producto/:slug',
        name: 'AuthProducto',
        component: () => import("@/views/user/ViewProducto.vue"),
        props: true
    },

    {
        path: '/tienda/busqueda/:slug',
        name: 'AuthBusqueda',
        component: () => import("@/views/user/ViewBusqueda.vue"),
        props: true
    },

    {
        path: '/tienda/carrito',
        name: 'AuthCarrito',
        component: () => import("@/views/user/ViewCarrito.vue"),
    },
]

// Exports
export {
    userRoutes
}