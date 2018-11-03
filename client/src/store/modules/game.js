const getDefaultState = () => {
  return {
    teamOne: {},
    teamTwo: {},
    playerA: {},
    playerB: {},
    playerC: {},
    playerD: {},
    teamOneScore: 0,
    teamTwoScore: 0,
    stage: 0
  }
}

const state = getDefaultState()

const getters = {
  getGameStage: state => {
    return state.teams
  }
}

const mutations = {
  setGameStage(state, stage) {
    state.stage = stage
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
