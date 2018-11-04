<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title is-centered" v-if="!player.name">
        Player<br>
        {{ spotLabel }}
      </p>
      <p class="card-header-title is-centered" v-else>
        {{ player.name }}
      </p>
    </div>
    <div class="card-body">
      <div v-if="game.stage == 1" class="field has-addons">
        <p class="control">
          <button @click="addPoint(1)" class="button is-small is-link">Point</button>
        </p>
        <p class="control">
          <button @click="addPoint(3)" class="button is-small is-info">Plunk</button>
        </p>
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