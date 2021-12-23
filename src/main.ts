import {createApp} from "vue"
import App from "./App.vue"
// @ts-ignore
import Router from "./router/index.ts"
import "element-plus/theme-chalk/display.css"
import "./config/main.css"

createApp(App).use(Router).mount("#app")
