<template>
  <div class="usuario">
    <h3>User Profile</h3>
    <p>ID: {{ id }}</p>
    <router-link
      tag="button"
      :to="{
        name: 'UserEdit',
        params: { id },
        query: { page: 2, language: 'en'},
        hash: '#footer'
      }"
    >
      Edit
    </router-link>
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
