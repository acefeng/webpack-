import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
