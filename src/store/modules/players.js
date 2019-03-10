import playersService from "@/services/players";

const getDefaultState = () => {
  return {
    players: [],
    availablePlayers: []
  }
}

const state = getDefaultState()

const getters = {
  getPlayers: state => {
    return state.players
  },
  getAvailablePlayers: state => {
    return state.availablePlayers
  }
}

const mutations = {
  setPlayers(state, players) {
    state.players = players
  },
  setAvailablePlayers(state, players) {
    state.availablePlayers = players
  },
}

const actions = {
  getAllPlayers({commit}) {
    playersService.getPlayers(players => {
      let availablePlayers = players.filter(player => {
        return player.available
      })
      commit('setAvailablePlayers', availablePlayers)
      commit('setPlayers', players)
    })
  }
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}
