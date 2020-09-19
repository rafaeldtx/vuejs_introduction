import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/template/Menu'
import NotFound from '@/components/template/NotFound'

import User from '@/components/user/User'
import UserIndex from '@/components/user/Index'
import UserShow from '@/components/user/Show'
import UserEdit from '@/components/user/Edit'

Vue.use(Router)

export default new Router({
  mode: 'history', // or hash
  scrollBehavior(to) {
    if(to.hash) {
      return { selector: to.hash }
    }
  },
  routes: [
    { path: '/', components: { default: Home, menu: Menu }, name: 'Homepage' },
    {
      path: '/users',
      component: User,
      children: [
        { path: '', component: UserIndex, name: 'UserIndex' },
        { path: ':id', component: UserShow, props: true, name: 'UserShow'},
        { path: ':id/edit', component: UserEdit, props: true, name: 'UserEdit' }
      ]
    },
    {
      path: '/usr',
      redirect: '/users'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
