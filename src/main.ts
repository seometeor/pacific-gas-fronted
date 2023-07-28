import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import i18n from './i18n'
import './assets/font/font.css'
import Particles from 'particles.vue3'

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})

window.onbeforeunload = function () {
    sessionStorage.removeItem('isChActive')
}

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.use(Particles)

app.mount('#app')