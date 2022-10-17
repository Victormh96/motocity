// Imports
import axios from "axios"
import {
    offer,
    top,
    featured,
    product,
    random,
    search
} from "../../services/paths"

// Vuex
export default {
    state() {
        return {
            offer: null,
            top: null,
            featured: null,
            product: null,
            random: null,
            search: null
        }
    },

    mutations: {
        MutationOffer(state, data) {
            state.offer = data
        },

        MutationTop(state, data) {
            state.top = data
        },

        MutationFeatured(state, data) {
            state.featured = data
        },

        MutationProduct(state, data) {
            state.product = data
        },

        MutationRandom(state, data) {
            state.random = data
        },

        MutationSearch(state, data) {
            state.search = data
        },
    },

    actions: {
        async Offer({ commit }) {
            await axios
                .get(offer())
                .then((response) => {
                    commit('MutationOffer', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async Top({ commit }) {
            await axios
                .get(top())
                .then((response) => {
                    commit('MutationTop', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async Featured({ commit }) {
            await axios
                .get(featured())
                .then((response) => {
                    commit('MutationFeatured', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async Product({ commit }, body) {
            await axios
                .get(product() + body)
                .then((response) => {
                    commit('MutationProduct', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async Random({ commit }) {
            await axios
                .get(random())
                .then((response) => {
                    commit('MutationRandom', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async Search({ commit }, body) {
            await axios
                .get(search() + body)
                .then((response) => {
                    commit('MutationSearch', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
};