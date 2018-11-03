<template>
  <div class="player-spot">
    <div v-if="!player.name">
      Player<br>
      {{ spotLabel }}
    </div>
    <div v-else>
      {{ player.name }}
      <div>
        <button>Add Point</button>
        <button>Add Plunk</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'PlayerSpot',
  props: {
    spotLabel: String,
    player: Object
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