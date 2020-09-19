<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>

    <router-view name="menu" />
    <transition mode="out-in"
      enter-active-class="animated rubberBand"
      leave-active-class="animated rollOut">
      <router-view />
    </transition>

    <div id="footer">
      <h6>Copyright &copy; Rafael Domingues Teixeira</h6>
    </div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

  #footer {
    margin-top: 1000px;
  }
</style>
