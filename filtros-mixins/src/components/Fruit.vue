<template>
    <div class="fruit">
        <ul class="list">
            <li v-for="fruit in fruits" :key="fruit">
                {{ fruit }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fruit: null,
            fruits: ['banana', 'maçã', 'laranja']
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
</script>

<style scoped>
    .fruit .list {
        list-style: none;
    }
</style>
