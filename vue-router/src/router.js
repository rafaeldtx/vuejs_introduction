import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/user/Profile'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/user/profile',
            component: Profile
        }
    ]
})
