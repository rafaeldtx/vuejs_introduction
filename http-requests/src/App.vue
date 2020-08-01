<template>
	<div id="app" class="container">
		<h1>HTTP with Axios</h1>

        <b-card>
            <b-form-group label="Name:">
                <b-form-input
                    type="text"
                    size="lg"
                    v-model="user.name"
                    placeholder="Input your name"
                >
                </b-form-input>
            </b-form-group>

            <b-form-group label="Email:">
                <b-form-input
                    type="email"
                    size="lg"
                    v-model="user.email"
                    placeholder="Input your email"
                >
                </b-form-input>
            </b-form-group>

            <hr>

            <b-button
                @click.prevent="save"
                size="lg"
                variant="primary"
            >
            Save
            </b-button>
        </b-card>
	</div>
</template>

<script>
export default {
    data() {
        return {
            user:{
                name: '',
                email: ''
            }
        }
    },
    methods: {
        save() {
            console.log(this.user)
        }
    }
    // created() {
    //     this.$http.post('usuarios.json', {
    //         name: 'rafael',
    //         email: 'rafael@example.com'
    //     }).then(res => console.log(res))
    // }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
