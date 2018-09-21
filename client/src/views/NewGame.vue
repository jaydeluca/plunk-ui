<template>
  <div class="newgame">
    <h1>New Game</h1>
    <div class="game-container">
      <div class="board-side boarder-right">
         <board></board>
      </div>
      <div class="board-side">
        <player-selection></player-selection>
      </div>
    </div>
  </div>
</template>

<script>
import Board from '@/components/Board.vue'
import PlayerSelection from '@/components/PlayerSelection.vue'

export default {
  name: 'home',
  components: {
    Board,
    PlayerSelection
  }
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
