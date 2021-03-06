import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/template/Menu'
import NotFound from '@/components/template/NotFound'

// import User from '@/components/user/User'
// import UserIndex from '@/components/user/Index'
// import UserShow from '@/components/user/Show'
// import UserEdit from '@/components/user/Edit'

const User = () => import(/* webpackChunkName: "user" */'@/components/user/User')
const UserIndex = () => import(/* webpackChunkName: "user" */'@/components/user/Index')
const UserShow = () => import(/* webpackChunkName: "user" */'@/components/user/Show')
const UserEdit = () => import(/* webpackChunkName: "user" */'@/components/user/Edit')

Vue.use(Router)

const router =  new Router({
  mode: 'history', // or hash
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if(to.hash) {
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
        { path: ':id/edit', component: UserEdit, props: true, name: 'UserEdit',
          beforeEnter(to, from, next) {
            console.log('Using beforeEnter inside of router-link')
            next()
        }
      }
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

router.beforeEach((to, from, next) => {
  console.log('Using global router beforeEach')
  console.log(`to: ${to.path}`)
  console.log(`from: ${from.path}`)

  next()
})

export default router
