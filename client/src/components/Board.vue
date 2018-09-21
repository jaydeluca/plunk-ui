<template>
  <div class="board">
    <div class="player-row">
      <player-spot spot-label="A"></player-spot>
      <player-spot spot-label="B"></player-spot>
    </div>
    <div class="board-field">
    </div>
    <div class="player-row">
      <player-spot spot-label="C"></player-spot>
      <player-spot spot-label="D"></player-spot>
    </div>
  </div>
</template>

<script>
import PlayerSpot from '@/components/PlayerSpot.vue'

export default {
  name: 'Board',
  props: {
    spotLabel: String,
    player: Object
  },
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