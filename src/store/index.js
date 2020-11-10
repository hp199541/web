import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import user from './module/user'
import tab from './module/tab'
Vue.use(Vuex)
import api from '@/api'
export default new Store ({
  modules:{
    user,tab
  },
  
})