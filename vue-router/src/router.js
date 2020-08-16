import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import User from '@/components/user/User'
import UserIndex from '@/components/user/Index'
import UserShow from '@/components/user/Show'

Vue.use(Router)

export default new Router({
  mode: 'history', // or hash
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/users',
      component: User,
      children: [
        { path: '', component: UserIndex },
        { path: ':id', component: UserShow, props: true }      ]
    }
  ]
})
