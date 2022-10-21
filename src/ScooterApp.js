const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  static scooterSessions = []

  constructor(){

    this.stations = { "Manhattan": [], "Brooklyn": [], "Queens": [], "Bronx": [], "Statenisland": [] }
    this.registeredUsers = {};
    ScooterApp.scooterSessions.push(ScooterApp)

  }

  register(user){
    if (this.registeredUsers[user.username]){
      console.log("Already registered!");
      return "Already registered!"
    }
    else if (user.age < 17){
      console.log("Too young to register!");
      return "Too young to register!"
    }
    else{
      this.registeredUsers[user.username] = {
        password: user.password,
        age: user.age,
        loggedIn: false,
        accountChange: 0
      }
    }
    console.log("User has been registered");
    return "User has been registered"
  }


}

module.exports = ScooterApp
