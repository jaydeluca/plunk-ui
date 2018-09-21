<template>
  <div class="player-selection">

    <div class="team">
      <div class="form-row">
        <span class="form-label">Team 1</span>
        <select v-model="teamOne">
          <option v-for="team in teams" :key="team.name" :value="team">{{ team.name }}</option>
        </select>
      </div>
      <div class="form-row" v-if="teamOne.name">
        <span class="form-label">Player A</span>
        <select v-model="playerA">
          <option v-for="player in teamOne.players" :key="player.name" :value="player">{{ player.name }}</option>
        </select>
      </div>
      <div class="form-row" v-if="teamOne.name">
        <span class="form-label">Player B</span>
        <select v-model="playerB">
          <option v-for="player in teamOne.players" :key="player.name" :value="player">{{ player.name }}</option>
        </select>
      </div>
    </div>

    <div class="team">
      <div class="form-row">
        <span class="form-label">Team 2</span>
        <select v-model="teamTwo">
          <option v-for="team in teams" :key="team.name" :value="team">{{ team.name }}</option>
        </select>
      </div>
      <div class="form-row" v-if="teamTwo.name">
        <span class="form-label">Player A</span>
        <select v-model="playerC">
          <option v-for="player in teamOne.players" :key="player.name" :value="player">{{ player.name }}</option>
        </select>
      </div>
      <div class="form-row" v-if="teamTwo.name">
        <span class="form-label">Player B</span>
        <select v-model="playerD">
          <option v-for="player in teamOne.players" :key="player.name" :value="player">{{ player.name }}</option>
        </select>
      </div>
    </div>
  </div>

</template>


<script>

export default {
  name: 'PlayerSelection',
  data: function() {
    return {
      teams: [
        {
          name: "Patriots",
          players: [
            { name: "Eric" },
            { name: "Jay" },
          ]
        },
        {
          name: "Broncos",
          players: [
            { name: "Mike" },
            { name: "Brad" },
          ]
        }
      ],
      teamOne: {},
      teamTwo: {},
      playerA: {},
      playerB: {},
      playerC: {},
      playerD: {},
    }
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
