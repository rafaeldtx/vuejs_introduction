<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ inverterName() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ age }}</strong></p>
        <button @click="resetName">Reiniciar Nome</button>
        <button @click="resetNameFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento.js'

export default {
    props: {
        name: {
            type: String,
            // required: true,
            default: 'Anônimo'
            // default: () => {
            //     return Array(10).fill(0).join(',')
            // }
        },
        resetNameFn: Function,
        age: Number
    },
    methods: {
        inverterName() {
            return this.name.split('').reverse().join('')
        },
        resetName() {
            this.name = 'Pedro'
            this.$emit('nameChanged', this.name)
        }
    },
    created(){
        barramento.$on('changedAge', age => {
            this.age = age
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
