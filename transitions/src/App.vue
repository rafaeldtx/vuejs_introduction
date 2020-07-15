<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
        <hr>

        <b-button variant="primary" @click="show = !show" class="mb-3">Show message</b-button>

        <transition name="fade">
            <b-alert variant="info" show v-if="show">This is a bootstrap message with fade animation</b-alert>
        </transition>

        <transition name="slide" type='animation'>
            <b-alert variant="info" show v-if="show">This is a bootstrap message with slide animation</b-alert>
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
/* INITIAL ENTER/LEAVE STATE OPACITY  */
.fade-enter, .fade-leave-to {
    opacity: 0;
}
/* DURING ENTER/LEAVE ACTIVE TRANSITION */
.fade-enter-active, .fade-leave-active {
   transition: opacity 2s;
}

@keyframes slide-in {
    from { transform: translateY(40px); }
    to { transform: translateY(0); }
}

@keyframes slide-out {
    from { transform: translateY(0); }
    to { transform: translateY(40px); }
}

/* DURING ENTER/LEAVE ACTIVE ANIMATION */
.slide-enter-active {
    animation: slide-in 2s ease;
    transition: opacity 6s;
}
.slide-leave-active {
    animation: slide-out 2s ease;
    transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
    opacity: 0;
}
</style>
