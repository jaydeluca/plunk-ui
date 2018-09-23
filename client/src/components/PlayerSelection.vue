<template>
  <div class="player-selection" v-if="teams.length > 0">

    <div class="team">
      <div class="form-row">
        <span class="form-label">Team 1</span>
        <select v-model="teamOnePlaceholder" @change="setTeamOne">
          <option v-for="team in teams" :key="team.name" :value="team">{{ team.name }}</option>
        </select>
      </div>
      <div class="form-row" v-if="teamOne.name">
        <span class="form-label">Player A</span>
        <select v-model="playerAPlaceholder" @change="setPlayerA">
          <option v-for="player in teamOne.players" :key="player.name" :value="player">{{ player.name }}</option>
        </select>
      </div>
      <div class="form-row" v-if="teamOne.name">
        <span class="form-label">Player B</span>
        <select v-model="playerBPlaceholder" @change="setPlayerB">
          <option v-for="player in teamOne.players" :key="player.name" :value="player">{{ player.name }}</option>
        </select>
      </div>
    </div>

    <div class="team">
      <div class="form-row">
        <span class="form-label">Team 2</span>
        <select v-model="teamTwoPlaceholder" @change="setTeamTwo">
          <option v-for="team in teams" :key="team.name" :value="team">{{ team.name }}</option>
        </select>
      </div>
      <div class="form-row" v-if="teamTwo.name">
        <span class="form-label">Player C</span>
        <select v-model="playerCPlaceholder" @change="setPlayerC">
          <option v-for="player in teamTwo.players" :key="player.name" :value="player">{{ player.name }}</option>
        </select>
      </div>
      <div class="form-row" v-if="teamTwo.name">
        <span class="form-label">Player D</span>
        <select v-model="playerDPlaceholder" @change="setPlayerD">
          <option v-for="player in teamTwo.players" :key="player.name" :value="player">{{ player.name }}</option>
        </select>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PlayerSelection',
  data: function() {
    return {
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
      this.$store.commit('teams/setTeamOne', this.teamOnePlaceholder)
    },
    setTeamTwo() {
      this.$store.commit('teams/setTeamTwo', this.teamTwoPlaceholder)
    },
    setPlayerA() {
      this.$store.commit('teams/setPlayerA', this.playerAPlaceholder)
    },
    setPlayerB() {
      this.$store.commit('teams/setPlayerB', this.playerBPlaceholder)
    },
    setPlayerC() {
      this.$store.commit('teams/setPlayerC', this.playerCPlaceholder)
    },
    setPlayerD() {
      this.$store.commit('teams/setPlayerD', this.playerDPlaceholder)
    },
  },
  computed: mapState({
    teams: state => state.teams.teams,
    teamOne: state => state.teams.teamOne,
    teamTwo: state => state.teams.teamTwo,
    playerA: state => state.teams.playerA,
    playerB: state => state.teams.playerB,
    playerC: state => state.teams.playerC,
    playerD: state => state.teams.playerD,
  }),
  created () {
    this.$store.dispatch('teams/getAllTeams')
  }
}
</script>

<style lang="scss">
.form-label {
  margin-right: 10px;
}

.team {
  margin: 30px 0;
}
</style>
