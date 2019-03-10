<template>
  <div class="board">
    <div class="player-row">
      <player-spot spot-label="A" :player="playerA"></player-spot>
      <player-spot spot-label="B" :player="playerB"></player-spot>
    </div>
    <div class="board-field">
    </div>
    <div class="player-row">
      <player-spot spot-label="C" :player="playerC"></player-spot>
      <player-spot spot-label="D" :player="playerD"></player-spot>
    </div>
  </div>
</template>

<script>
import PlayerSpot from '@/components/PlayerSpot.vue'
import { mapState } from 'vuex'

export default {
  name: 'Board',
  props: {
    spotLabel: String,
    player: Object
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
  components: {
    PlayerSpot
  }
}
</script>

<style lang="scss">
.player-row {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
}

.board-field {
  height: 400px;
  width: 50%;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
}
</style>