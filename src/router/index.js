// Imports
import { createRouter, createWebHistory } from "vue-router"

// Auth 
import { authRoutes } from "@/router/auth/authRoutes"

// Community 
import { communityRoutes } from "@/router/community/communityRoutes"

// User 
import { userRoutes } from "@/router/user/userRoutes"

// Community 
import { adminRoutes } from "@/router/admin/adminRoutes"

// Routes
const routes = [
    ...authRoutes,
    ...communityRoutes,
    ...userRoutes,
    ...adminRoutes
]

// Initialization
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

// Exports
export default router
