<template>
  <div class="section" v-if="teams.length > 0">

    <div class="columns">
      <div class="column">
        <article class="message is-dark">
          <div class="message-header">
            <p class="message-header-title">Team 1</p>
          </div>
          <div class="message-body">
            <div class="field">
              <div class="control">
                <div class="select is-primary">
                  <select v-model="teamOnePlaceholder" @change="setTeamOne">
                    <option :value="teamUnselected">{{ teamUnselected.name }}</option>
                    <option v-for="team in teams" :key="team.name" :value="team">{{ team.name }}</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="columns" v-if="teamOne.name">
              <div class="column is-one-quarter">
                <label class="form-label">Player A</label>
              </div>
              <div class="column">
                <div class="field">
                  <div class="control">
                    <div class="select is-primary">
                      <select v-model="playerAPlaceholder" @change="setPlayerA">
                        <option :value="playerUnselected">{{ playerUnselected.name }}</option>
                        <option v-for="player in teamOne.players" :key="player.name" :value="player">{{ player.name }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns" v-if="teamOne.name">
              <div class="column is-one-quarter">
                <label class="form-label">Player B</label>
              </div>
              <div class="column">
                <div class="field">
                  <div class="control">
                    <div class="select is-primary">
                      <select v-model="playerBPlaceholder" @change="setPlayerB">
                        <option :value="playerUnselected">{{ playerUnselected.name }}</option>
                        <option v-for="player in teamOne.players" :key="player.name" :value="player">{{ player.name }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <article class="message is-dark">
          <div class="message-header">
            <p class="message-header-title">Team 2</p>
          </div>
          <div class="message-body">
            <div class="field">
              <div class="control">
                <div class="select is-primary">
                  <select v-model="teamTwoPlaceholder" @change="setTeamTwo">
                    <option :value="teamUnselected">{{ teamUnselected.name }}</option>
                    <option v-for="team in teams" :key="team.name" :value="team">{{ team.name }}</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="columns" v-if="teamTwo.name">
              <div class="column is-one-quarter">
                <label class="form-label">Player C</label>
              </div>
              <div class="column">
                <div class="field">
                  <div class="control">
                    <div class="select is-primary">
                      <select v-model="playerCPlaceholder" @change="setPlayerC">
                        <option :value="playerUnselected">{{ playerUnselected.name }}</option>
                        <option v-for="player in teamTwo.players" :key="player.name" :value="player">{{ player.name }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns" v-if="teamTwo.name">
              <div class="column is-one-quarter">
                <label class="form-label">Player D</label>
              </div>
              <div class="column">
                <div class="field">
                  <div class="control">
                    <div class="select is-primary">
                      <select v-model="playerDPlaceholder" @change="setPlayerD">
                        <option :value="playerUnselected">{{ playerUnselected.name }}</option>
                        <option v-for="player in teamTwo.players" :key="player.name" :value="player">{{ player.name }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </article>
      </div>
    </div>

    <button @click="setGameStage(1)" class="button is-link">Start Game</button>

  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PlayerSelection',
  data: function() {
    return {
      teamUnselected: { name:"Select Team" },
      playerUnselected: { name:"Select Player" },
      teamOnePlaceholder: {},
      teamTwoPlaceholder: {},
      playerAPlaceholder: {},
      playerBPlaceholder: {},
      playerCPlaceholder: {},
      playerDPlaceholder: {},
    }
  },
  methods: {
    setTeamOne() {
      let value = this.teamOnePlaceholder !== this.teamUnselected ? this.teamOnePlaceholder : {}
      this.$store.commit('teams/setTeamOne', value)
    },
    setTeamTwo() {
      let value = this.teamTwoPlaceholder !== this.teamUnselected ? this.teamTwoPlaceholder : {}
      this.$store.commit('teams/setTeamTwo', value)
    },
    setPlayerA() {
      let value = this.playerAPlaceholder !== this.playerUnselected ? this.playerAPlaceholder : {}
      this.$store.commit('teams/setPlayerA', value)
    },
    setPlayerB() {
      let value = this.playerBPlaceholder !== this.playerUnselected ? this.playerBPlaceholder : {}
      this.$store.commit('teams/setPlayerB', value)
    },
    setPlayerC() {
      let value = this.playerCPlaceholder !== this.playerUnselected ? this.playerCPlaceholder : {}
      this.$store.commit('teams/setPlayerC', value)
    },
    setPlayerD() {
      let value = this.playerDPlaceholder !== this.playerUnselected ? this.playerDPlaceholder : {}
      this.$store.commit('teams/setPlayerD', value)
    },
    setGameStage(stage) {
      this.$store.commit('game/setGameStage', stage)
    }
  },
  computed: mapState({
    teams: state => state.teams.teams,
    teamOne: state => state.teams.teamOne,
    teamTwo: state => state.teams.teamTwo,
  }),
  created () {
    this.$store.dispatch('teams/getAllTeams')
    this.teamOnePlaceholder = this.teamUnselected
    this.teamTwoPlaceholder = this.teamUnselected
    this.playerAPlaceholder = this.playerUnselected
    this.playerBPlaceholder = this.playerUnselected
    this.playerCPlaceholder = this.playerUnselected
    this.playerDPlaceholder = this.playerUnselected
  }
}
</script>

<style lang="scss">
.form-label {
  margin-right: 10px;
}
</style>
