import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Uninstall from './views/Uninstall.vue'
import Retention from './views/Retention.vue'
import Installs from './views/Installs.vue'
import Revenue from './views/Revenue.vue'
import Stats from './views/Stats.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/uninstall',
      name: 'uninstall',
      component: Uninstall
    },
    {
      path: '/retention',
      name: 'retention',
      component: Retention
    },
    {
      path: '/installs',
      name: 'installs',
      component: Installs
    },
    {
      path: '/revenue',
      name: 'revenue',
      component: Revenue
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats
    }
  ]
})
