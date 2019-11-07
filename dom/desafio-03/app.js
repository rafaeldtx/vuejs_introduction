new Vue({
    el: '#desafio',
    data: {
        value: 0,
    },
    computed: {
        result() {
            return this.value != 37 ? 'Valor diferente' : 'Valor Igual'
        }
    },
    watch: {
        result() {
            setTimeout(() => {
                this.value = 0
            }, 5000)
        }
    }
});