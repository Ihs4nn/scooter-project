const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  static scooterSessions = []

  constructor(){

    station = { Manhattan: [], Brooklyn: [], Queens: [], Bronx: [], Statenisland: [] }
    registeredUsers = [];
    ScooterApp.scooterSessions.push(ScooterApp)

  }

  
}

module.exports = ScooterApp
