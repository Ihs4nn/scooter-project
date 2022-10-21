const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('Testing the register(user) method', () => {
    const registerScooterApp = new ScooterApp()
    const userScooterApp = new User('IhsanIsGr8', 'PsswrdGoBrr', 20)
    registerScooterApp.register(userScooterApp)
    const result = registerScooterApp.register(userScooterApp)

    test('testing if its in registeredUser', () =>{
        expect(result).toEqual("Already registered!");
    })

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

// log in

// add scooter

// remove scooter
