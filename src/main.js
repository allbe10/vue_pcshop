import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Button,Input } from 'element-ui'
import './assets/icon/index/iconfont.css'


axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Button).use(Input)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
