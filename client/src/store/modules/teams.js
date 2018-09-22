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
    getAllTeams ({ commit }) {
        teamsService.getTeams(teams => {
            commit('setTeams', teams)
        })
    }
}

const mutations = {
    setTeams (state, teams) {
        state.teams = teams
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
