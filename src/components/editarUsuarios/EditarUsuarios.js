import router from "@/router/router"

export default {
    name: 'EditarUsuarios',

    data() {
        return {
            usuario: JSON.parse(localStorage.getItem('usuarios')).find(user => user.id == this.$route.params.id),
        }

    },

    computed: {
        novoUsuario() {
            return this.usuario
        }
    },

    methods: {
        salvarAlteracoes() {
            let usuarios = JSON.parse(localStorage.getItem('usuarios'))
            let indexDoUsuario = JSON.parse(localStorage.getItem('usuarios')).findIndex(user => user.id == this.$route.params.id)
            usuarios[indexDoUsuario] = this.novoUsuario
            localStorage.setItem('usuarios', JSON.stringify(usuarios))
            console.log(this.novoUsuario)
            router.push({path:`/`})
        },

        deletarUsuario() {
            let usuarios = JSON.parse(localStorage.getItem('usuarios'))
            let indexDoUsuario = JSON.parse(localStorage.getItem('usuarios')).findIndex(user => user.id == this.$route.params.id)
            usuarios.splice(indexDoUsuario, 1)
            localStorage.setItem('usuarios', JSON.stringify(usuarios))
            router.push({path:`/`})
        }
    }
}