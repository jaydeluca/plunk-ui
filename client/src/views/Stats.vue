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
        <router-link to="/players">
          <span class="button">Player Management</span>
        </router-link>
      </div>
    </div>

    <div class="columns">
      <div class="column is-fullwidth">
        <p class="title is-2">
          Stats
        </p>
        <table class="table is-fullwidth is-striped is-bordered">
          <thead>
            <tr>
              <th>Player</th>
              <th>Team</th>
              <th>Games Played</th>
              <th>One Point</th>
              <th>Plunks</th>
              <th>Total Points</th>
              <th>One Point / Game</th>
              <th>Plunks / Game</th>
              <th>Total Points / Game</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="stat in stats" :key="stat.player.id">
              <td>{{ stat.player.name }}</td>
              <td>{{ stat.team }}</td>
              <td>{{ stat.gamesPlayed }}</td>
              <td>{{ stat.points }}</td>
              <td>{{ stat.plunks }}</td>
              <td>{{ stat.totalPoints }}</td>
              <td>{{ stat.onePointsPerGame }}</td>
              <td>{{ stat.plunksPerGame }}</td>
              <td>{{ stat.totalPointsPerGame }}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>

    <div class="columns">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import client from '@/client'

export default {
  name: 'stats',
  data: function() {
    return {
      stats: []
    }
  },
  methods: {

  },
  created () {
    client.get('/stats').then(res => {
      this.stats = res.data
    })
  }
}
</script>