<template>
  <div class="usuario">
    <h3>User Profile</h3>
    <p>ID: {{ id }}</p>
    <router-link tag="button" :to="`/users/${id}/edit`">Edit</router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id
  //   }
  // },
}
</script>

<style>

</style>
