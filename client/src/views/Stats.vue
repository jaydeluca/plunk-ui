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
      <div class="column is-half is-offset-one-quarter">
        <p class="title is-2">
          Stats
        </p>
      </div>
    </div>

    <div class="columns">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import statsService from '@/services/stats'

export default {
  name: 'players',
  data: function() {
    return {
      stats: []
    }
  },
  methods: {

  },
  created () {
    this.stats = statsService.getStats()
  }
}
</script>