const User = require('../src/User')

// User tests here
describe('tests the user object', () =>{
    const newUser = new User('IhsanIsGr8', 'PsswrdGoBrr', 20)
    test('Checks if the first argument is passed in', () => {
        expect(newUser.username).toEqual('IhsanIsGr8');
    })

    test('Checks if the second argument is passed in', () =>{
        expect(newUser.password).toEqual('PsswrdGoBrr');
    })

    test('Checks if the third argument is passed in', () =>{
        expect(newUser.age).toEqual(20);
    })
})