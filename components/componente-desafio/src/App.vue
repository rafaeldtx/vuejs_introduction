<template>
	<v-app>
		<app-menu />

		<app-toolbar />

		<v-content>
			<app-carousel />
		</v-content>

		<app-footer />
	</v-app>
</template>

<script>
import Toolbar from './Toolbar.vue'
import Menu from './Menu.vue'
import Carousel from './Carousel.vue'
import Footer from './Footer.vue'

export default {
	components: {
		'app-footer': Footer,
		'app-carousel': Carousel,
		'app-toolbar': Toolbar,
		'app-menu': Menu,
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
