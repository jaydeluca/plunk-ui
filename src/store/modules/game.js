const getDefaultState = () => {
  return {
    playerA: {},
    playerB: {},
    playerC: {},
    playerD: {},
    teamOneScores: [],
    teamTwoScores: [],
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
    let score = {
      player: points.player,
      value: points.value
    }
    if (["A", "B"].includes(points.source)) {
      state.teamOneScores.push(score)
    } else {
      state.teamTwoScores.push(score)
    }
  },
  saveGame(state) {
    state.teamOneScores = []
    state.teamTwoScores = []
    state.playerA = {}
    state.playerB = {}
    state.playerC = {}
    state.playerD = {}
    state.stage = 0
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
