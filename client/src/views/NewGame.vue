<template>
  <div class="newgame">
    <h1>New Game</h1>
    <div class="game-container">
      <div class="board-side boarder-right">
         <board></board>
      </div>
      <div class="board-side">

        <player-selection v-if="game.stage == 0"></player-selection>
        <score-board v-if="game.stage == 1"></score-board>
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
.game-container {
  display: flex;
  // border: 1px solid black;
  .board-side {
    width: 50%;
  }
  .boarder-right {
    border-right: 1px solid black;
  }
}
</style>
