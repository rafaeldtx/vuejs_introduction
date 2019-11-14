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
import Toolbar from '@/components/template/Toolbar.vue'
import Menu from '@/components/template/Menu.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Footer from '@/components/template/Footer.vue'

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
