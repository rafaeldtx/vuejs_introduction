new Vue({
  el: '#app',
  data: {
    status: false,
    hero: 100,
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
      this.hurt('monster', 5, 10, especial)
      this.hurt('hero', 7, 12, false)
    },
    getRandom(min,max) {
      const value = Math.random() * (max - min) + min
      return Math.floor(value)
    },
    healAndHurt() {
      this.heal(10, 15)
      this.hurt('hero', 7, 12, false)
    },
    heal(min, max) {
      const heal = this.getRandom(min, max)
      this.hero = Math.min(this.hero + heal, 100)
    },
    hurt(attr, min, max, especial){
      const plus = especial ? 5 : 0;
      const hurt = this.getRandom(min + plus, max + plus)
      this[attr] = Math.max(this[attr] - hurt, 0)
    },
  },
  watch: {
    hasResult(value) {
      console.log(value)
      if(value) this.status = false
    }
  },
})