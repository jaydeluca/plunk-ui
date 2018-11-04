<template>
  <div class="scoreboard">
    <div>
      <div>{{ teamOne.name }}</div>
      <div>{{ game.teamOneScore }}</div>
    </div>
    <div>
      <div>{{ teamTwo.name }}</div>
      <div>{{ game.teamTwoScore }}</div>
    </div>

    <button>Submit</button>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ScoreBoard',
  computed: mapState({
    teamOne: state => state.teams.teamOne,
    teamTwo: state => state.teams.teamTwo,
    game: state => state.game
  }),
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