// Imports
import axios from "axios"
import {
    all,
    add,
    update
} from "../../services/paths"

// Vuex
export default {
    state() {
        return {
            all: null,
            add: null,
            update: null
        }
    },

    mutations: {
        MutationAll(state, data) {
            state.all = data
        },

        MutationAdd(state, data) {
            state.add = data
        },

        MutationUpdate(state, data) {
            state.update = data
        },
    },

    actions: {
        async All({ commit }) {
            await axios
                .get(all())
                .then((response) => {
                    commit('MutationAll', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async Add({ commit }, body) {
            await axios
                .post(add(), body)
                .then((response) => {
                    commit('MutationAdd', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async Update({ commit }, body) {
            await axios
                .put(update() + body.id, body)
                .then((response) => {
                    commit('MutationUpdate', response.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
};