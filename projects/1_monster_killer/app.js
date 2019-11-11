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
      this.logs = []
    },
    attack(especial) {
      this.hurt('monster', 5, 10, especial, 'Herói', 'Monstro', 'hero')
      if(this.monster > 0)
        this.hurt('hero', 7, 12, false, 'Monstro', 'Herói', 'monster')
    },
    getRandom(min,max) {
      const value = Math.random() * (max - min) + min
      return Math.floor(value)
    },
    healAndHurt() {
      this.heal(10, 15)
      this.hurt('hero', 7, 12, false, 'Monstro', 'Herói', 'monster')
    },
    heal(min, max) {
      const heal = this.getRandom(min, max)
      this.hero = Math.min(this.hero + heal, 100)
      this.registerLog(`Herói ganhou ${heal} de vida.`, 'hero')
    },
    hurt(attr, min, max, especial, source, target, cls){
      const plus = especial ? 5 : 0;
      const hurt = this.getRandom(min + plus, max + plus)
      this[attr] = Math.max(this[attr] - hurt, 0)

      this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
    },
    registerLog(text, cls) {
      this.logs.unshift({text, cls})
    },
  },
  watch: {
    hasResult(value) {
      if(value) this.status = false
    }
  },
})