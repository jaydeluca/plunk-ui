import client from '@/client'

export default {
  getTeams (cb) {
    const teams = client.get('/teams').then(res => {
      return cb(res.data.content)
    })
  },
  saveTeam (team, store) {
    console.log(team)
    client.post('/teams', team).then(res => {
      store.dispatch('players/getAllPlayers')
      store.dispatch('teams/getAllTeams')
    })
  }
}