import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router/router'

const app = createApp(App);
const pinia = createPinia();

app.use(router)
app.use(pinia)
app.mount('#app')
