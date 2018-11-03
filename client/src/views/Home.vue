<template>
  <div class="home">
    <h1>Plunk Game</h1>
    <div class="button-container">
      <router-link to="/players">
        <span class="button-home purple">Player Management</span>
      </router-link>
      <router-link to="/newgame">
        <span class="button-home green">New Game</span>
      </router-link>
      <router-link to="/stats">
        <span class="button-home purple">Stats</span></router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>

<style lang="scss">

.home {
  margin-top: 100px;
}

.button-container {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
}

.button-home {
  padding: 10px 20px;
  color: white;
}

.green {
  background-color: green;
}

.purple {
  background-color: purple;
}

a {
  text-decoration: none;
}

</style>
