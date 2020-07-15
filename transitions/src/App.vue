<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
        <hr>
        <b-button variant="primary" @click="show = !show" class="mb-3">Show message</b-button>
        <transition name="fade">
            <b-alert variant="primary" show v-if="show">This is a bootstrap message with toggle animation</b-alert>
        </transition>
	</div>
</template>

<script>

export default {
    data() {
        return {
            show: false
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
	font-size: 1.5rem;
}
/* INITIAL ANIMATION STATE */
.fade-enter {
    opacity: 0;
}
/* DURING ANIMATION STATE */
.fade-enter-active {
   transition: opacity 2s;
}
/* FINISHED ANIMATION STATE */
.face-enter-to {
    opacity: 1;
}

/* INITIAL LEAVE ANIMATION STATE */
.fade-leave {
    opacity: 1;
}
/* DURING LEAVE ANIMATION STATE */
.fade-leave-active {
   transition: opacity 2s;
}
/* FINISHED LEAVE ANIMATION STATE */
.face-leave-to {
    opacity: 0;
}
</style>
