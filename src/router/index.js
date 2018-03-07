import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var vA = r => require.ensure([], () => r(require('../components/v_A.vue')), "chunk11")
var vB = r => require.ensure([], () => r(require('../components/v_B.vue')), "chunk22")

export default new Router({
  routes: [{
      path: '/vA',
      component: vA
    },
    {
      path: '/vB',
      component: vB
    }
  ]
})
