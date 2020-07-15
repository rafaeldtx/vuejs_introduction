<template>
  <div>
      <h3>{{ fruits | words_length | space_to_comma }}</h3>
      <h3>{{ using_words_length }}</h3>
      <h3>{{ using_space_to_comma }}</h3>
  </div>
</template>

<script>
export default {
    filters: {
        space_to_comma(sentence) {
            return sentence.replace(/\s/g, ',')
        }
    },
    data () {
         return {
             fruits: 'Maçã Pera Melancia Abacate'
         }
    },
    computed: {
        using_words_length() {
            return this.fruits.replace(/\s/g, ',')
        },
        using_space_to_comma() {
            return this.fruits.split(' ').map(fruit => `${fruit} (${fruit.length})`).join(' ')
        }
    }
}
</script>

<style>

</style>
