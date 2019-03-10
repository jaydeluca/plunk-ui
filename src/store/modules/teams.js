import teamsService from "@/services/teams";

const getDefaultState = () => {
  return {
    teams: [],
    teamOne: {},
    teamTwo: {},
    playerA: {},
    playerB: {},
    playerC: {},
    playerD: {},
  }
}

const state = getDefaultState()

const getters = {
  getTeams: state => {
    return state.teams
  },
  getTeamOne: state => {
    return state.teamOne
  },
  getTeamTwo: state => {
    return state.teamTwo
  }
}

const actions = {
  getAllTeams({commit}) {
    teamsService.getTeams(teams => {
      commit('setTeams', teams)
    })
  }
}

const mutations = {
  setTeams(state, teams) {
    state.teams = teams
  },
  clearTeams(state) {
    Object.assign(state, getDefaultState())
  },
  setTeamOne(state, teamOne) {
    state.teamOne = teamOne
  },
  setTeamTwo(state, teamTwo) {
    state.teamTwo = teamTwo
  },
  setPlayerA(state, playerA) {
    state.playerA = playerA
  },
  setPlayerB(state, playerB) {
    state.playerB = playerB
  },
  setPlayerC(state, playerC) {
    state.playerC = playerC
  },
  setPlayerD(state, playerD) {
    state.playerD = playerD
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
