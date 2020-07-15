<template>
    <div class="fruit">
        <div class="input-group">
            <input class="input" type="text" v-model="fruit" @keydown.enter="add"/>
            <button class="add-button" @click="add">Add Fruit</button>
        </div>

        <ul class="list" v-if="fruits.length">
            <li v-for="fruit in fruits" :key="fruit">
                {{ fruit }}
            </li>
        </ul>
    </div>
</template>

<script>
import fruitMixin from '@/mixins/fruitMixin.js'

export default {
    mixins: [fruitMixin]
}
</script>

<style scoped>
.fruit {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.fruit .list {
    list-style: none;
    background-color: green;
    color: white;
    padding: 1.5rem;
    border-radius: 8px;
    max-width: 250px;
}

.input {
    background-color: rgb(200, 238, 194);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    font-size: 1.2rem;
    border: 1px solid gray;
    border-right: 0px;
    padding: 0.8rem 0.3rem;
}

.add-button {
    background-color: rgb(90, 173, 90);
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2rem;
    border: 1px solid gray;
    padding: 0.8rem 0.3rem;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
</style>
