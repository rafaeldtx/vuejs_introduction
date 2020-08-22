<template>
  <button sucesso @click="goHomepage">Back</button>
</template>

<script>
export default {
  props: {
    path: {
      default: '/'
    },
    name: {
      default: 'Homepage'
    }
  },
  methods: {
    goHomepage() {
      if (this.name) {
        this.$router.push({ name: this.name })
      } else if (this.path) {
        this.$router.push({ path: this.path })
      }
    }
  }
}
</script>

<style>

</style>
