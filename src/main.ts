import './style/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

declare global {
    interface Window {
        CESIUM_BASE_URL: string
    }
}
const pinia = createPinia()
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
