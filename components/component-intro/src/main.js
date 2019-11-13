import Vue from 'vue'
import App from './App.vue'
import Counter from './Counter.vue'

Vue.config.productionTip = false
Vue.component('app-contador', Counter)

new Vue({
  render: h => h(App),
}).$mount('#app')
