import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'

import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// import router
import router from './router'

const app = createApp(App)

app.use(router)
app.use(naive)
app.component('EasyDataTable', Vue3EasyDataTable)
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
