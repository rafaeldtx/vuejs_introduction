<template>
	<div id="app">
		<h1 id="header-title">Rotas com VueRouter</h1>

    <router-view name="menu" />
    <transition mode="out-in"
      enter-active-class="animated rubberBand"
      leave-active-class="animated rollOut">
      <router-view />
    </transition>

    <div id="footer">
      <div class="message">
        <p class="description">
          Parece que não há muito o que fazer por aqui, click no botão abaixo e continue a explorar :D
        </p>
        <router-link
        :to="'#header-title'"
        :v-on:click="scrollTop"
        class="scroll-button">Ir para o topo</router-link>
      </div>

      <h6 class="copyright">Copyright &copy; Rafael Domingues Teixeira</h6>
    </div>
	</div>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      location.hash = '#header-title';
    }
  }
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

  .message {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .message .description {
    margin-bottom: 1.5rem;
    max-width: 500px;
    text-align: center;
  }

  .message .scroll-button {
    background-color: rgb(119, 175, 109);
    color: rgb(41, 80, 34);
    border-radius: 10px;
    padding: 1.5rem;
    text-align: center;
  }

  #footer .copyright {
    text-align: center;
  }
</style>
