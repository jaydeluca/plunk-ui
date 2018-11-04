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
  updateGameScore(state, points) {
    console.log(points)
    if (["A", "B"].includes(points.source)) {
      state.teamOneScore += points.value
    } else {
      state.teamTwoScore += points.value
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
