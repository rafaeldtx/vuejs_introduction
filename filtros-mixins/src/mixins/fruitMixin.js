export default {
    data() {
        return {
            fruit: null,
            fruits: []
        }
    },
    methods: {
        add() {
            if(this.fruit) {
                this.fruits.push(this.fruit)
                this.fruit = null
            }
        }
    }
}
