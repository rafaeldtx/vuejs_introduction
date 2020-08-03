import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://vuejs-projects-6888d.firebaseio.com/'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://vuejs-projects-6888d.firebaseio.com/'
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
