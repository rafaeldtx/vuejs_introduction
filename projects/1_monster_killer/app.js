new Vue({
  el: '#app',
  data: {
    status: false,
    hero: 0,
    monster: 100,
    default_life: 100,
    logs: [],
  },
  computed: {
    hasResult(){
      return this.hero == 0 || this.monster == 0
    }
  },
  methods: {
    start() {
      this.status = true
      this.hero = this.default_life
      this.monster = this.default_life
    },
    attack(especial) {
      this.hurt('hero', 7, 12, false)
      this.hurt('monster', 5, 10, especial)
    },
    hurt(attr, min, max, especial){
      const plus = especial ? 5 : 0;
      const hurt = this.getRandom(min + plus, max + plus)
      this[attr] = Math.max(this[attr] - hurt, 0)
    },
    getRandom(min,max) {
      const value = Math.random() * (max - min) + min
      return Math.floor(value)
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
  },
  watch: {
    hasResult(value) {
      console.log(value)
      if(value) this.status = false
    }
  },
})