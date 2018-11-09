import client from '@/client'

export default {
  getStats (cb) {
    const stats = client.get('/stats').then(res => {
      return cb(res.data.content)
    })
  }
}