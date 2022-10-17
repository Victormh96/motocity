const authRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/auth/ViewLogin.vue")
    },
]

// Exports
export {
    authRoutes
}