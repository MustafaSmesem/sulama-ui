import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'flowbite'
import './assets/css/tailwind.css'
// import './assets/css/style.css'
// import i18n from './i18n'

createApp(App).use(store).use(router).mount('#app')
