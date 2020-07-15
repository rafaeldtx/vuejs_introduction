<template>
  <div>
      <h3>{{ fruits | words_length | space_to_comma }}</h3>
  </div>
</template>

<script>
export default {
    filters: {
        space_to_comma(sentence) {
            return sentence.split(' ').join(',')
        }
    },
    data () {
         return {
             fruits: 'Maçã Pera Melancia Abacate'
         }
    }
}
</script>

<style>

</style>
