<template>
  <div class="section">
    <div class="container">
      <div class="level" style="justify-content: space-around; padding-bottom: 20px; margin-bottom: 30px; border-bottom: 1px solid black;">
        <router-link to="/">
          <span class="button">Home</span>
        </router-link>
        <router-link to="/players">
          <span class="button">Player Management</span>
        </router-link>
      </div>
    </div>

    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <p class="title is-2">
          New Game
        </p>
      </div>
    </div>

    <div class="container" style="margin-top: 30px;">
      <div class="columns">
        <div class="column is-two-thirds boarder-right">
          <board></board>
        </div>
        <div class="column is-one-third">
          <player-selection v-if="game.stage == 0"></player-selection>
          <score-board v-if="game.stage == 1"></score-board>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import Board from '@/components/Board.vue'
import PlayerSelection from '@/components/PlayerSelection.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'

export default {
  name: 'home',
  components: {
    Board,
    PlayerSelection,
    ScoreBoard
  },
  computed: mapState({
    teamOne: state => state.teams.teamOne,
    teamTwo: state => state.teams.teamTwo,
    playerA: state => state.teams.playerA,
    playerB: state => state.teams.playerB,
    playerC: state => state.teams.playerC,
    playerD: state => state.teams.playerD,
    game: state => state.game
  }),
}
</script>

<style lang="scss">
  // border: 1px solid black;
  .boarder-right {
    border-right: 1px solid black;
  }
</style>
