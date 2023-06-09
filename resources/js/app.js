import './bootstrap';
import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './routes.js'
import axios from 'axios'
window.axios = axios;

import '../css/app.css';
// createApp(App).mount("#app")

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(createPinia)
