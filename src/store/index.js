// Imports
import { createStore, createLogger } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// Auth
import auth from './modules/auth'

// Community
import community from './modules/community'

// User
import user from './modules/user'

// Admin
import admin from './modules/admin'

export default createStore({
    state: {
    },

    getters: {
    },

    mutations: {

    },

    actions: {

    },

    modules: {
        auth,
        community,
        user,
        admin
    },

    plugins: [createLogger(), createPersistedState()]
})