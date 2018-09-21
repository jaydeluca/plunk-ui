/**
 * Replace with actual api calls when api is done
 */

const _teams = [
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
]

export default {
  getTeams (cb) {
    setTimeout(() => cb(_teams), 100)
  }
}