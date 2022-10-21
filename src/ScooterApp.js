const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  static scooterSessions = []

  constructor(){

    this.stations = { Manhattan: [], Brooklyn: [], Queens: [], Bronx: [], Statenisland: [] }
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


  logIn(username, password){
    if(Object.keys(this.registeredUsers).includes(username)){
      if(this.registeredUsers[username].password === password){
        console.log("Welcome back user! You're all logged in.")
        return "Welcome back user! You're all logged in."
      }
    }
    console.log("Username or password is incorrect. :(");
    return "Username or password is incorrect. :("
  }

  addScooter(location, scooter){
    for(let i in this.stations){
      if (i === location){
        scooter.station = location
        this.stations[i].push(scooter)
      }
    }
  }

  removeScooter(scooterToRemove){
    for( let i in this.stations){
      let index = this.stations[i].indexOf(scooterToRemove)
      if(this.stations[i][index].serial === scooterToRemove.serial){
        this.stations[i].splice(index, 1)
        return "Station removed!"
      }
      else if(this.stations[i].serial !== scooterToRemove){
        console.log("Station cannot be found!");
        return "Station cannot be found"
      }
    }
  }

  



}

module.exports = ScooterApp
