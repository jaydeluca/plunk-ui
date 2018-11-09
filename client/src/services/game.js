import client from '@/client'

export default {
  saveGame (scores) {
    client.post('/games/save', scores).then(res => {
    })
  }
}