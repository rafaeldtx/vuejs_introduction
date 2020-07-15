<template>
  <div>
      <h3>{{ fruits | words_length | space_to_comma }}</h3>
      <h3>{{ using_words_length }}</h3>
      <h3>{{ using_space_to_comma }}</h3>
  </div>
</template>

<script>
import computedMixin from '@/mixins/computedMixin.js'

export default {
    mixins: [computedMixin],
    filters: {
        space_to_comma(sentence) {
            return sentence.replace(/\s/g, ',')
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
