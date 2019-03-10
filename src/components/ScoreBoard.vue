<template>
  <div>

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
        <table class="table is-fullwidth is-bordered is-striped">
          <thead>
            <tr>
            <th>
              Player
            </th>
            <th>
              Score
            </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(score, index) in game.teamOneScores" :key="index">
              <td>{{ score.player.name }}</td>
              <td>{{ score.value}}</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>{{ teamScore(game.teamOneScores) }}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>

    <article class="message is-info">
      <div class="message-header">
        {{ teamTwo.name }}
      </div>
      <div class="message-body">
        <table class="table is-fullwidth is-bordered is-striped">
          <thead>
            <tr>
            <th>
              Player
            </th>
            <th>
              Score
            </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(score, index) in game.teamTwoScores" :key="index">
              <td>{{ score.player.name }}</td>
              <td>{{ score.value}}</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>{{ teamScore(game.teamTwoScores) }}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>

    <button class="button is-link" @click="saveGame">Submit</button>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import gameService from '@/services/game'

const add = (a, b) => a + b

export default {
  name: 'ScoreBoard',
  computed: mapState({
    teamOne: state => state.teams.teamOne,
    teamTwo: state => state.teams.teamTwo,
    game: state => state.game,
  }),
  methods: {
      teamScore(team) {
        return team.length > 0 ? team.map(score => score.value).reduce(add) : 0
      },
      saveGame() {
        gameService.saveGame(this.game.teamOneScores.concat(this.game.teamTwoScores))
        this.$store.commit('game/saveGame')
      }
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