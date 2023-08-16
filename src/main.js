
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import TaiUi from '../modules/tai-ui'   // 方法1引入
// import Transfer from '../modules/tai-ui/Transfer'  // 方法2引入

createApp(App).use(store).use(router).use(TaiUi).mount('#app')
