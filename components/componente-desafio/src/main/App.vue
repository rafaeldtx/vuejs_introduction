<template>
	<v-app>
		<Menu />

		<Toolbar />

		<v-content>
			<Carousel />
		</v-content>

		<Footer />
	</v-app>
</template>

<script>
import Toolbar from '@/components/template/Toolbar.vue'
import Menu from '@/components/template/Menu.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Footer from '@/components/template/Footer.vue'

export default {
	components: {
		Footer,
		Carousel,
		Toolbar,
		Menu,
	},
	data() {
		return {
			itensMenu: [
				{titulo: 'Início', icon: 'dashboard'},
				{titulo: 'Sobre', icon: 'question_answer'}
			],
			fotos: [
				{src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
			]
		}
	}
}
</script>
