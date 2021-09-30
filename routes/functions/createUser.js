
const { pool } = require('../../dbConfig');



const createUser = {
    password: (plainText) => {

        if (!plainText || typeof plainText !== 'string') {
            return JSON.stringify({ status: 'error', error: 'Invalid password' })

        }
        if (plainText.length < 5) {
            return JSON.stringify({ status: 'error', error: 'password should be at least 6 characters' })
        }

        const password = plainText;

        return password;
    },
    username: (username) => {
        if (!username || typeof username !== 'string') {
            return JSON.stringify({ status: 'error', error: 'Invalid username' })
        }


        if (pool.query(`SELECT * FROM users WHERE username=$1`, [username])
            .then(res => {
                if (res.rows) {
                    // console.log('username is alreay exist')
                }
            })
            .then(pool.end())
            .catch((err) => {
                throw err
            })) {

                return JSON.stringify({status: 'error', error:"Username is already existed"}); 




        }
        

    },
    newUsername: (username)=>{
        if(username){
            return JSON.stringify({status: 'ok' ,message:'username is Valid'})
        }
    }
    
}

module.exports = createUser;