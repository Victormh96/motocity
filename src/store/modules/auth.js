// Imports
import axios from "axios"
import {
    login
} from "../../services/paths"

// Vuex
export default {
    state() {
        return {
            login: null,
        }
    },

    mutations: {
        MutationLogin(state, data) {
            state.login = data
        },
    },

    actions: {
        async Login({ commit }, body) {
            await axios
                .post(login(), body)
                .then((response) => {
                    commit('MutationLogin', response.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
};