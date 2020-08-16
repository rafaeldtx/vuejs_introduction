import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/user/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history', // or hash
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/user/:id/profile',
      component: Profile,
      props: true
    }
  ]
})
