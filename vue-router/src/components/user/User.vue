<template>
  <div class="user">
    <h1>Users</h1>
    <hr>
    <router-view />
    <button sucesso @click="goHomepage">Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    goHomepage() {
      this.$router.push('/users')
      // this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>

</style>
