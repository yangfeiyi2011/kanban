import Vue from 'vue'
import Vuex from 'vuex'
import { request } from '../common/axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userstatus: false,
    username: ''
  },
  mutations: {
    userLogin(state, username) {
      state.userstatus = true
      state.username = username
      console.log(state.userstatus)
    },
    userLogout(state) {
      state.userstatus = false
      state.username = ''
      console.log(state.userstatus)
    },
  },
  getters: {

  },
  actions: {
    login(context, userMessages) {
      request({
				url:'/api/v1/login',
				method: 'POST',
				data: {
					username: userMessages.username,
					password: userMessages.passwd,
				}
				}).then(res =>{
          if (res.data.result == 0) {
            const username = JSON.parse(res.config.data).username
            context.commit('userLogin', username)
          }
          setTimeout(
            () =>{
              context.commit('userLogout')
            },600000
          )
				}).catch(err => {
					console.log(err)
				})
    }
  }
})

export default store