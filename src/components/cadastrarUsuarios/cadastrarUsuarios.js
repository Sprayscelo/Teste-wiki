export default {
    name: 'cadastrarUsuarios',

    data() {
        return {
            users: {
                id: '',
                first_name: '',
                last_name: '',
                job: '',
                avatar: '',
                email: ''
            }
        }
    },
    
    methods: {
        cadastrarUsuarios() {
            this.$http.post('https://reqres.in/api/users', {"name": this.users.first_name + ' ' + this.users.last_name, "job": this.users.job})
            .then(response => {
                this.users.id = response.data.id
                localStorage.setItem('usuarios', JSON.stringify(JSON.parse(localStorage.getItem('usuarios')).concat(this.users))) 
                router.push({path:`/`})
            }, erro => {
                console.log(erro)
                router.push({path:`/`})
            })
        }
    }
}