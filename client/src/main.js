import 'es6-promise/auto'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import teamsService from './services/teams'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    teams: [],
    teamOne: {},
    teamTwo: {},
    playerA: {},
    playerB: {},
    playerC: {},
    playerD: {},
  },
  actions: {
    getAllTeams ({ commit }) {
      teamsService.getTeams(teams => {
        commit('setTeams', teams)
      })
    }
  },
  mutations: {
    setTeams (state, teams) {
      state.teams = teams
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
