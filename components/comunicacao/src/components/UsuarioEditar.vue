<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuário: <strong>{{ age }}</strong></p>
        <button @click="changeAge">Alterar Idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento.js'

export default {
    props: ['age'],
    methods: {
        changeAge() {
            this.age += 1
            barramento.$emit('changedAge', this.age)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
