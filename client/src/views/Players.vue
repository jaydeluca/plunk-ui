<template>
  <div class="section">
    <div class="container">
      <div class="level" style="justify-content: space-around; padding-bottom: 20px; margin-bottom: 30px; border-bottom: 1px solid black;">
        <router-link to="/">
          <span class="button">Home</span>
        </router-link>
        <router-link to="/newgame">
          <span class="button">New Game</span>
        </router-link>
      </div>
    </div>

    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <p class="title is-2">
          Player/Team Management
        </p>
      </div>
    </div>

    <div class="columns">
      <div class="column is-half">
        <article class="message is-dark">
          <div class="message-header">
            <p>New Player</p>
          </div>
          <div class="message-body">
            <div class="field">
              <div class="control">
                <input type="text" v-model="newPlayer" class="input" placeholder="Player Name">
              </div>
            </div>
            <button @click="savePlayer" class="button">Save</button>
          </div>
        </article>
      </div>
      <div class="column is-half">
        <article class="message is-dark">
          <div class="message-header">
            <p>Players</p>
          </div>
          <div class="message-body" style="text-align: left;">
            <p :key="player.id" v-for="player in players">
              {{ player.name }}  <span v-if="player.available" class="tag is-link">Available</span>
            </p>
          </div>
        </article>
      </div>
    </div>

    <div class="columns">
      <div class="column is-half">
        <article class="message is-info">
          <div class="message-header">
            <p>New Team</p>
          </div>
          <div class="message-body">
            <div class="field">
              <div class="control">
                <input type="text" v-model="newTeam.name" class="input" placeholder="Team Name">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <div class="select is-primary">
                  <select v-model="newTeam.playerOne">
                    <option value="">Select Player</option>
                    <option :key="player.id" v-for="player in availablePlayers" :value="player">
                      {{player.name}}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <div class="select is-primary">
                  <select v-model="newTeam.playerTwo">
                    <option value="">Select Player</option>
                    <option :key="player.id" v-for="player in availablePlayers" :value="player">
                      {{player.name}}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <button @click="saveTeam" class="button">Save</button>
          </div>
        </article>
      </div>

      <div class="column is-half">
        <article class="message is-info">
          <div class="message-header">
            <p>Teams</p>
          </div>
          <div class="message-body">
            <div :key="team.id" v-for="team in teams" class="card" style="margin-bottom: 10px;">
              <div class="card-header">
                <p class="card-header-title">{{ team.name }}</p>
              </div>
              <div class="card-body" style="padding: 10px;">
                <div class="columns">
                  <div class="column" v-for="player in team.players" :key="player.id">
                    <p>{{player.name}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
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
      this.newTeam = {
        name: '',
        playerOne: '',
        playerTwo: ''
      }
    }
  },
  created () {
    this.$store.dispatch('players/getAllPlayers')
    this.$store.dispatch('teams/getAllTeams')
  }
}
</script>