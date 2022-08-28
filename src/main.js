
// Bootstrap imports
import Vue from 'vue'
import App from './App'
import router from '@/router/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
