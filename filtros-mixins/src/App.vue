<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
        <h4>CPF: {{cpf | cpf_mask}} </h4>

        <hr>

        <fruit />

        <hr>

        <mixin-challenge />
	</div>
</template>

<script>
import Fruit from '@/components/Fruit'
import MixinChallenge from '@/components/MixinChallenge'

export default {
    components: { Fruit, MixinChallenge },
    filters: {
        cpf_mask(cpf) {
            const arr = cpf.split('')
            arr.splice(3, 0, '-')
            arr.splice(7, 0, '-')
            arr.splice(11, 0, '-')
            return arr.join('')
        }
    },
    data() {
        return {
            cpf: '12345678910'
        }
    }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
