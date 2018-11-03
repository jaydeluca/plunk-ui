<template>
  <div class="newgame">
      <router-link to="/newgame">
        <span class="button-home green">New Game</span>
      </router-link>
    <div>
      <h1>Player Management</h1>

      <input type="text" v-model="newPlayer"><button @click="savePlayer">Save</button>

      <p :key="player.id" v-for="player in players">
        {{ player.name }}  <span v-if="player.available" class="available">Available</span>
      </p>
    </div>
    <div>
      <h1>Team Management</h1>

      <input type="text" v-model="newTeam.name">
      <select v-model="newTeam.playerOne">
        <option value="">Select Player</option>
        <option :key="player.id" v-for="player in availablePlayers" :value="player">
          {{player.name}}
        </option>
      </select>
      <select v-model="newTeam.playerTwo">
        <option value="">Select Player</option>
        <option :key="player.id" v-for="player in availablePlayers" :value="player">
          {{player.name}}
        </option>
      </select>
      <button @click="saveTeam">Save</button>

      <div :key="team.id" v-for="team in teams" class="team-square">
        <div><strong>{{ team.name }}</strong></div>
        <div>
          <p v-for="player in team.players" :key="player.id">
            {{player.name}}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import playersService from '@/services/players'
import teamsService from '@/services/teams'

export default {
  name: 'players',
  data: function() {
    return {
      newPlayer: '',
      newTeam: {
        name: '',
        playerOne: '',
        playerTwo: ''
      },
    }
  },
  computed: mapState({
    players: state => state.players.players,
    availablePlayers: state => state.players.availablePlayers,
    teams: state => state.teams.teams
  }),
  methods: {
    savePlayer() {
      playersService.savePlayer(this.newPlayer, this.$store)
      this.newPlayer = ''
    },
    saveTeam() {
      teamsService.saveTeam(this.newTeam, this.$store)
      this.newTeam = ''
    }
  },
  created () {
    this.$store.dispatch('players/getAllPlayers')
    this.$store.dispatch('teams/getAllTeams')
  }
}
</script>

<style lang="scss">

.available {
  background-color: rgba(black, .5);
  color: white;
  font-weight: bold;
  padding: 3px;
  font-size: 10px;
}

.team-square {
  border: 1px solid black;
  margin: 10px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

</style>