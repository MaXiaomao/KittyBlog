import {createApp} from "vue"
import App from "./App.vue"
// @ts-ignore
import Router from "./router/index.ts"

createApp(App).use(Router).mount("#app")
