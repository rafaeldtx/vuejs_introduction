import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
    created() {
        console.log('Mixin Global on created!')
    }
})

Vue.filter('words_length', (value) => {
    return value.split(' ').map(word => {
        return `${word}(${word.length})`
    }).join(' ')
})

new Vue({
	render: h => h(App)
}).$mount('#app')
