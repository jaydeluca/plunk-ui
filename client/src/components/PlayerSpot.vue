<template>
  <div class="spot">
    <template v-if="!player.name">
      Player<br>
      {{ spotLabel }}
    </template>
    <template v-else>
      {{ player.name }}
    </template>
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

.spot {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>