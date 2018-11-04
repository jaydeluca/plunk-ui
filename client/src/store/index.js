import Vue from 'vue'
import Vuex from 'vuex'
import teams from './modules/teams'
import game from './modules/game'
import players from './modules/players'
import './../../node_modules/bulma/css/bulma.css';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    teams: teams,
    game: game,
    players: players
  }
})