import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://vuejs-projects-6888d.firebaseio.com/'
axios.defaults.headers.common['Authorization'] = 'global-authorization'
axios.defaults.headers.get['Accepts'] = 'application/json'
Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://vuejs-projects-6888d.firebaseio.com/',
            headers: {
                // authorization: 'other-global-authorization',
                get: {
                    authorization: 'only-get-authorization'
                }
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)

            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            console.log(res)

            return res
        }, error => Promise.reject(error))
    }
})
