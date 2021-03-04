import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import vuex from './store/index'
import '../src/utils/rem'

createApp(App).use(router).use(vuex).mount('#app')
