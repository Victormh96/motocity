// Imports
import App from "./App.vue"
import store from "./store"
import router from "./router"
import { createApp } from "vue"
import VueSweetalert2 from "vue-sweetalert2"

// Initialization
const app = createApp(App)

// Uses
app.use(store)
    .use(router)
    .use(VueSweetalert2)
    .mount("#app")