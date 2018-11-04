<template>
  <div class="player-spot">
    <div v-if="!player.name">
      Player<br>
      {{ spotLabel }}
    </div>
    <div v-else>
      {{ player.name }}
      <div v-if="game.stage == 1">
        <button @click="addPoint(1)">Add Point</button>
        <button @click="addPoint(3)">Add Plunk</button>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PlayerSpot',
  props: {
    spotLabel: String,
    player: Object
  },
  computed: mapState({
    game: state => state.game
  }),
  methods: {
    addPoint(value) {
      let points = {
        source: this.spotLabel,
        value: value
      }
      this.$store.commit('game/updateGameScore', points)
    }
  }
}
</script>

<style lang="scss">

.player-spot {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>