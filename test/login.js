const createUser = require('../routes/functions/createUser');

const loginUser = require('../routes/functions/loginUser');

const expect = require('chai').expect;

describe('Signin Validation', () => {
    const password1 = '123456';
    const password2 = '1234';
    const password3 = 123456;
    const username1 = 'newUser1';
    const username2 = 'newUser7';

    context('signin valid for password', () => {
        it('should return ok', () => {
            expect(createUser.password(password1)).to.eq(password1);
        })
    })

    context('signin not vaild ---> password is too short', () => {
        it('should return an error', () => {
            expect(createUser.password(password2)).which.eq(JSON.stringify({ status: 'error', error: 'password should be at least 6 characters' }));
        })
    })

    context('signin not vaild ---> password is not valid', () => {
        it('should return an error', () => {
            expect(createUser.password(password3)).which.eq(JSON.stringify({ status: 'error', error: 'Invalid password' }));
        })
    })

    context('signin valid for username', () => {
        it('should return ok', () => {
            expect(createUser.newUsername(username2)).which.eq(JSON.stringify({ status: 'ok', message: 'username is Valid' }));
        })
    })
    context('signin not valid ---> username is not valid', () => {
        it('should return an error', () => {
            expect(createUser.username(username1)).which.eq(JSON.stringify({ status: 'error', error: "Username is already existed" }));
        })
    })
})


describe('Login Validation', () => {
    const password1 = '123456';
    const password2 = '1234';
    const password3 = 123456;
    const username1 = 'newUser1';
    const username2 = 'newUser7';
    context('Login valid for username', () => {
        it('should return ok', () => {
            expect(loginUser.usernameMatch(username1)).which.eq(JSON.stringify({ status: 'ok', message: "Username is matched !LOGIN!" }));

        })
    })
    context('Login not valid for username', () => {
        it('should return an error', () => {
            expect(loginUser.usernameNotMatch(username2)).which.eq(JSON.stringify({ status: 'error', error: "Username is incorrect" }))
        })
    })

    context('Login valid for password', () => {
        it('should return ok', () => {
            expect(loginUser.passwordMatch(password1)).which.eq(JSON.stringify({ status: 'ok', message: "Password is matched !LOGIN!" }));
        })
    })
    context('Login not valid for password', () => {
        it('should return and error', () => {
            expect(loginUser.passwordNotMatched(password2)).which.eq(JSON.stringify({ status: 'error', error: "Password is incorrect" }))
        })
    })
})