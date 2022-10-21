const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('Testing the register(user) method', () => {
    // Initialising a new scooter class
    const registerScooterApp = new ScooterApp()
    const userScooterApp = new User('IhsanIsGr8', 'PsswrdGoBrr', 20)
    //Passing it to the register method twice to see if the user was registered
    registerScooterApp.register(userScooterApp)
    const result = registerScooterApp.register(userScooterApp)
    test('testing if its in registeredUser', () =>{
        expect(result).toEqual("Already registered!");
    })

    //Creating a new user isntance with a low age
    const errorUser = new User('Milly', 'Haha', 14)
    const errorResult = registerScooterApp.register(errorUser)
    test('testing is error message is thrown if age is > than 17', () =>{
        expect(errorResult).toEqual("Too young to register!");
    })

    test('testing if user.password has been passed in correctly', () => {
        expect(registerScooterApp.registeredUsers.IhsanIsGr8.password).toEqual(userScooterApp.password)   
    })

    test('testing if user.age has been passed in correctly', () => {
        expect(registerScooterApp.registeredUsers.IhsanIsGr8.age).toEqual(userScooterApp.age)
    })

    test('testing if user.loggedIn is false', () =>{
        expect(registerScooterApp.registeredUsers.IhsanIsGr8.loggedIn).toEqual(false)
    })

    test('testing if user.accountChange is 0', () =>{
        expect(registerScooterApp.registeredUsers.IhsanIsGr8.accountChange).toEqual(0)
    })

})

describe('Testing the logIn(username, password) method', () =>{
    const logInScooterApp = new ScooterApp()
    const logInUser = new User('IhsanIsGr8', 'PsswrdGoBrr', 20)
    logInScooterApp.register(logInUser);

    const result = logInScooterApp.logIn('IhsanIsGr8', 'PsswrdGoBrr')
    test('testing if it successfully logs in new users', () =>{
        expect(result).toEqual("Welcome back user! You're all logged in.")
    })

    const errorResult = logInScooterApp.logIn('IhsanIsGr8', 'wrongPsswrd')
    test('testing if it states the login was unsuccessful', () =>{
        expect(errorResult).toEqual("Username or password is incorrect. :(")
    })
})

describe('Testing the addScooter() method', () =>{
    const addScooterApp = new ScooterApp();
    const newUser = new User('IhsanIsGr8', 'PsswrdGoBrr', 20)
    const newScooter = new Scooter('Manhattan', newUser)
    addScooterApp.addScooter('Manhattan', newScooter)

    test('testing if the scooters property is inside correct locationgi', () =>{
        expect(addScooterApp.stations.Manhattan.includes(newScooter)).toBe(true);
    })
})

describe('Testing the removeScooter() method', () => {
    
})

// remove scooter
