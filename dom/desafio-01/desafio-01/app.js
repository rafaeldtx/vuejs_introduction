new Vue({
  el: '#desafio',
  data: {
    name: 'Rafael',
    age: 22,
    img: './paisagem.jpg',
  },
  methods: {
    age_per(num){
      return this.age * num
    },
    random(){
      return Math.random()
    }
  }
})