const Scooter = require('../src/Scooter')
const User = require('../src/User')

describe('tests the scooter Object', () => {
  const testScooter = new Scooter('Manhattan', 'Ihsan')
  test('Checks if first argument is passed in', () => {
    expect(testScooter.station).toEqual('Manhattan');
  })
  test('Checks if the second argument is passed in', () =>{
    expect(testScooter.user).toEqual('Ihsan');
  })
  test('Checks if isBroken is set to false in the beginning', () => {
    expect(testScooter.isBroken).toEqual(false);
  })
  test('Checks if docked is set to true in the beginning', () =>{
    expect(testScooter.docked).toEqual(true);
  })
  test('Checks if serial is a number', () =>{
    expect(typeof(testScooter.serial)).toEqual("number");
  })
  test('Checks if charge is a number', () =>{
    expect(typeof(testScooter.charge)).toEqual("number");
  })

})

 //Rent() Method tests
describe('Testing the rent method', () => {
  //new constructor for the method
  const methodScooter = new Scooter('Manhattan', 'Ihsan')
  methodScooter.charge = 30;
  test('rent() method logs correctly on charge > 20', () =>{
      expect(methodScooter.rent()).toEqual('Enjoy the ride!');
  })
  //if its smaller or equal to 20, charge it
  const toThrowError1 = () => {methodScooter.charge = 15; methodScooter.rent()}
  test('rent() method logs correctly on charge <= 20', () =>{
    expect(toThrowError1).toThrow("Scooter low on battery, please charge.");
  }) 
  //must be broken if its something else
  const toThrowError2 = () => {methodScooter.charge = 30; methodScooter.isBroken = true; methodScooter.rent()}
  test('rent() method logs if the scooter is broken', () =>{
    expect(toThrowError2).toThrow("Scooter is broken, please send a repair request.");
  })
})


//Dock() method tests
describe('Testing the dock method', () =>{
  const dockScooter = new Scooter('Manhattan', 'Ihsan');
  test('dock() method passed first argument', () =>{
    expect(dockScooter.station).toEqual('Manhattan');
  })

  const dockThrowError = () => {dockScooter.station = ""; dockScooter.dock()}
  test('dock() method checks if its undefined', () =>{
    expect(dockThrowError).toThrow("Docking station required!");
  })

  test('dock() method updates docked', () =>{
    dockScooter.rent()
    dockScooter.dock('Manhatten')
    expect(dockScooter.docked).toEqual(true);
  })

  test('dock() method updates user', () =>{
    expect(dockScooter.user).toEqual("");
  })
})

describe('Testing the recharge() method', () => {
  test("recharge() method testing", async () => {
    const rechargeScooter = new Scooter();
    await rechargeScooter.recharge(); // we need to wait for the charge!
    expect(rechargeScooter.charge).toBe(100);
  });
})

describe('Testing the requestRepair() method', () => {
   test("repairRecharge() method testing", async () => {
     const repairScooter = new Scooter();
     await repairScooter.requestRepair(); // we need to wait for the charge!
     expect(repairScooter.isBroken).toBe(false);
    });
 })