export default {
    name: 'listarUsuarios',

    created() {
        this.listarUsuarios(1)
    },

    data() {
        return {
            users: {},
            page: 1
        }
        
    },

    methods: {

        async listarUsuarios(page) {

            let usuarios1 = ''
            let usuarios2 = ''

            if(!localStorage.getItem('usuarios')) {
                await this.$http.get('https://reqres.in/api/users?page=1')
                .then(response => {
                    for (let usuarios of response.data.data) {
                        if(!usuarios.job) {
                            usuarios.job = `Não definido`
                        }
                        
                    }
                    usuarios1 = response.data.data
    
                }, erro => {
                    console.log(erro)
                })
                await this.$http.get('https://reqres.in/api/users?page=2')
                .then(response => {
                    for (let usuarios of response.data.data) {
                        if(!usuarios.job) {
                            usuarios.job = `Não definido`
                        }
                    }
    
                    usuarios2 = response.data.data
                    localStorage.setItem('usuarios', JSON.stringify(usuarios1.concat(usuarios2)))
                }, erro => {
                    console.log(erro)
                })
            }
            
            

            this.users = JSON.parse(localStorage.getItem('usuarios'))
                
            this.page = page
     },
        
    }
}

