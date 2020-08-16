<template>
  <div class="usuario">
    <h1>User profile</h1>
    <hr>
    <button sucesso @click="goHomepage">Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    goHomepage() {
      this.$router.push('/')
      // this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>

</style>
