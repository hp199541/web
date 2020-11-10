import { getToken,setToken,removeToken,setUser,getUser} from '@/utils/token.js'
import {login,register} from '@/api'
const getDefaultState = () => {
  return {
    token:getToken(),
    user:getUser()?getUser():'default',
    name:''
  }
}
const state = getDefaultState()
const mutations = {
  RESET_STATE:(state) => {
    Object.assign(state,getDefaultState)
  },
  SET_TOKEN:(state,token) => {
    state.token = token
  },
  SET_USER:(state,user) => {
    state.user = user
  }
}
const actions = {
  async login({commit},userInfo){
    const res = await login(userInfo)
    const token = res.data
    commit('SET_TOKEN',token.msg)
    commit('SET_USER',token.name)
    setToken(token.msg)
    setUser(token.name)
    return res
  },
  
}
export default{
	namespaced: true,
	state,
	mutations,
	actions 
}