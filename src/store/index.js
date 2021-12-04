import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navTitle: "InteraApps",
    auth: {
      loggedIn: false,
      user: null,
      loading: true
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
