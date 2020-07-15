export default {
    computed: {
        using_words_length() {
            return this.fruits.replace(/\s/g, ',')
        },
        using_space_to_comma() {
            return this.fruits.split(' ').map(fruit => `${fruit} (${fruit.length})`).join(' ')
        }
    }
}
