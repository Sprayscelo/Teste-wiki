import Vue from 'vue'
import Router from 'vue-router'
import ListarUsuarios from '@/components/listarUsuarios/ListarUsuarios.vue'
import CadastrarUsuarios from '@/components/cadastrarUsuarios/CadastrarUsuarios.vue'
import EditarUsuarios from '@/components/editarUsuarios/EditarUsuarios.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'listarUsuarios',
            component: ListarUsuarios
        },
        {
            path: '/cadastrarUsuarios',
            name: 'CadastrarUsuarios',
            component: CadastrarUsuarios
        },
        {
            path: '/editarUsuarios/:id',
            name: 'EditarUsuarios',
            component: EditarUsuarios
        }
    ]
})