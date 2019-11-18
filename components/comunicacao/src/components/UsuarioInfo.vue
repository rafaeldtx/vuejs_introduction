<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ inverterName() }}</strong></p>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            // required: true,
            default: 'Anônimo'
            // default: () => {
            //     return Array(10).fill(0).join(',')
            // }
        }
    },
    methods: {
        inverterName() {
            return this.name.split('').reverse().join('')
        }
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
