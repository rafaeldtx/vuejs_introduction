<template>
  <div class="edit">
    <h3>User edit</h3>
    <p>ID: {{ id }}</p>
    <p>Página: {{ this.$route.query.page }}</p>
    <p>Language: {{ this.$route.query.language }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  beforeRouteLeave(to, from, next) {
    console.log('using beforeRouteLeave')
    next()
  }
}
</script>

<style>

</style>
