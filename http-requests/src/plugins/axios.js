import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://vuejs-projects-6888d.firebaseio.com/'


Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})
