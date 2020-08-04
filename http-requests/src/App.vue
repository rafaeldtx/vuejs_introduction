<template>
	<div id="app" class="container">
		<h1>HTTP with Axios</h1>

        <b-alert show dismissible :variant="alert.type" v-if="alert">
            {{ alert.message }}
        </b-alert>

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
            <b-button
                @click.prevent="getUsers"
                size="lg"
                variant="success"
                class="ml-3"
            >
            Get Users
            </b-button>
        </b-card>

        <b-list-group class="mt-3">
            <b-list-group-item v-for="(user, id) in users" :key="id">
                <strong>ID:</strong> {{ id }} <br>
                <strong>Name:</strong> {{ user.name }} <br>
                <strong>Email:</strong> {{ user.email }}<br>

                <b-button variant="info" size="lg" @click="loadUser(id)">
                    Load User
                </b-button>
                <b-button variant="danger" size="lg" @click="remove(id)">
                    Remove
                </b-button>
            </b-list-group-item>
        </b-list-group>
	</div>
</template>

<script>
export default {
    data() {
        return {
            user:{
                id: null,
                name: '',
                email: ''
            },
            users: [],
            alert: null
        }
    },
    methods: {
        save() {
            const method =  this.user.id ? 'patch' : 'post'
            const extend_url = this.user.id ? `/${this.user.id}.json` : '.json'

            this.$http[method](`users${extend_url}`, this.user)
                .then(res => {
                    this.cleanInput()
                    this.getUsers()
                    this.alertMessage('success', 'Record saved successfully!')
                })
                .catch(err => {
                    this.alertMessage(
                        'danger', 'An error occurred! Record can\'t be save!'
                    )
                })
        },
        remove(id) {
            this.$http.delete(`users/${id}.json`).then(() => {
                this.getUsers()
            })
        },
        loadUser(id) {
            this.user = {id: id, ...this.users[id]}
        },
        cleanInput() {
            this.user.id = null,
            this.user.name = '',
            this.user.email = ''
        },
        getUsers() {
            this.$http('users.json').then((res) => {
                this.users = res.data
            })
        },
        alertMessage(type, message) {
            this.alert = {
                type: type,
                message: message
            }
        }
    }
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
