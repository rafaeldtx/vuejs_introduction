import Vue from 'vue'
export default new Vue({
  methods: {
    changeAge(age) {
      this.$emit('changedAge', age)
    },
    whenAgeChanges(callback) {
      this.$on('changedAge', callback)
    }
  }
})