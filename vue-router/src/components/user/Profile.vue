<template>
  <div class="usuario">
    <h1>User profile</h1>
    <p>ID: {{ id }}</p>
    <hr>
    <button sucesso @click="goHomepage">Back</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
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
