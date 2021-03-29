import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import { routes } from './routes'

Vue.prototype.$http = axios;
Vue.use(VueRouter)

const router = new VueRouter({routes, mode: 'history'})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
