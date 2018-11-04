<template>
  <div class="section">

    <div class="columns">
      <div class="column">
        <p class="title is-3">
          Scoreboard
        </p>
      </div>
    </div>

    <article class="message is-dark">
      <div class="message-header">
        {{ teamOne.name }}
      </div>
      <div class="message-body">
        {{ game.teamOneScore }}
      </div>
    </article>

    <article class="message is-info">
      <div class="message-header">
        {{ teamTwo.name }}
      </div>
      <div class="message-body">
        {{ game.teamTwoScore }}
      </div>
    </article>

    <button class="button is-link">Submit</button>

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