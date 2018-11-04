import client from '@/client'

export default {
  getPlayers (cb) {
    const players = client.get('/players').then(res => {
      return cb(res.data.content)
    })
  },
  savePlayer (player, store) {
    client.post('/players', {name: player}).then(res => {
      store.dispatch('players/getAllPlayers')
    })
  }
}