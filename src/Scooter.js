class Scooter{
  // scooter code here
  constructor(station, user){
    this.station = station;
    this.user = user;
    this.serial = Math.floor(Math.random() * 1000) + 1;
    this.charge = Math.floor(Math.random() * 100) + 1;
    this.isBroken = false;
    this.docked = true;
  }

  rent(){
    if((this.isBroken === false) && (this.charge > 20)){
      this.docked = false;
      console.log("Enjoy the ride!");
      return "Enjoy the ride!"
    }

    else if(this.charge <= 20){
      throw ("Scooter low on battery, please charge.");
    }
    
    else{
      throw ("Scooter is broken, please send a repair request.");
    }
  }

  dock(station){
    this.station = station
    if(typeof station === 'undefined'){
      throw "Docking station required!"
    }
    else{
      this.docked = true;
      this.user = "";
    }
  }

  async recharge(){
    console.log('Starting charge');
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100
    console.log('Charge complete');   
  }

  async requestRepair(){
    console.log('Starting repair');
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.isBroken = false;
    console.log('Repair complete');
  }

}


module.exports = Scooter
