
// const { set } = require('mongoose');
// const { pool } = require('../dbConfig');

// const createUser = require('../routes/functions/createUser');
// const loginUser = require('../routes/functions/loginUser');







// describe('Signin tests', () => {
//     const password1 = '123456';
//     const password2 = '1234';
//     const password3 = 123456;
//     const username1 = 'newUser1';
//     const username2 = 'newUser7';


//     test('Signup Valid for password', () => {
//         expect(createUser.password(password1)).toBe(password1)
//     })

//     test('Signup not valid ---> password is too short', () => {
//         expect(createUser.password(password2)).toBe(JSON.stringify({ status: 'error', error: 'password should be at least 6 characters' }));
//     })

//     test('Signup is not vaild ---> password is not valid', () => {
//         expect(createUser.password(password3)).toBe(JSON.stringify({ status: 'error', error: 'Invalid password' }));
//     })

//     test('SignIn Vaild for username',()=>{
        
//         expect(createUser.newUsername(username2)).toBe(JSON.stringify({status: 'ok' ,message:'username is Valid'}));
//     })
    
//     test('SignIn invalid ---> username is not valid',()=>{
        
//         expect(createUser.username('123456')).toBe(JSON.stringify({status: 'error', error:"Username is already existed"}));
//     })




// })

// describe('Login Test',()=>{
//     const password1 = '123456';
//     const password2 = '1234';
//     const password3 = 123456;
//     const username1 = 'newUser1';
//     const username2 = 'newUser7';

//     test('Login valid for username',()=>{
//         expect(loginUser.usernameMatch(username1)).toBe(JSON.stringify({ status: 'ok', message: "Username is matched !LOGIN!" }))
//     })

//     test('Login not valid for username',()=>{
//         expect(loginUser.usernameNotMatch(username2)).toBe(JSON.stringify({ status: 'error', error: "Username is incorrect" }))
//     })

//     test('Login vaild for password',()=>{
//         expect(loginUser.passwordMatch(password1)).toBe(JSON.stringify({ status: 'ok', message: "Password is matched !LOGIN!" }))
//     })

//     test('Login not valid for password',()=>{
//         expect(loginUser.passwordNotMatched(password2)).toBe(JSON.stringify({ status: 'error', error: "Password is incorrect" }))
//     })
// })