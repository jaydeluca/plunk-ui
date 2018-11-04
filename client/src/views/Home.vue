<template>
  <div class="section">
      <div class="container">
        <div class="level" style="justify-content: center;">
          <p class="title is-2">Plunk Game</p>
        </div>
        <div class="button-container">
          <router-link to="/players">
            <span class="button is-primary">Player Management</span>
          </router-link>
          <router-link to="/newgame">
            <span class="button is-info">New Game</span>
          </router-link>
          <router-link to="/stats">
            <span class="button is-warning">Stats</span></router-link>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>

<style lang="scss">

.button-container {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
}

.flex-center {
  display: flex;
  justify-content: center;
}

</style>
