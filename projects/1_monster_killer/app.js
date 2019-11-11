new Vue({
  el: '#app',
  data: {
    hero: 100,
    monster: 100,
    default_life: 100,
    logs: [],
    status: false,
  },
  computed: {

  },
  methods: {
    attack() {
      this.battle('minus', { min: 6, max: 11 }, 'hero')
      this.battle('minus', { min: 3, max: 7 }, 'monster')
    },
    special_attack() {
      this.battle('minus', { min: 3, max: 7 }, 'hero')
      this.battle('minus', { min: 6, max: 11 }, 'monster')
    },
    health() {
      this.battle('plus', { min: 6, max: 11 }, 'hero')
      this.battle('minus', { min: 3, max: 11 }, 'hero')
    },
    battle(type, range, target) {
      math = Math.floor(Math.random() * (range.max - range.min + 1) + range.min);

      this.logs.push(`${target} has been hit in ${math}`)
      
      if (type == 'minus') 
        if((this[target] - math) < 0)
          this[target] = 0
        else
          this[target]-= math
      else
        if((this[target] + math) > 100)
          this[target] = 100
        else
          this[target] += math
    },
    watch: {
    },
  }
})