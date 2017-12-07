import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/login',
      component: login
    }
  ]
})
