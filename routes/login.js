const express = require('express')

const router = express.Router();

const bcrypt = require('bcryptjs');
const path = require('path');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const { pool } = require('../dbConfig');


let accessTokens;

router.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const user = pool.query(`
    SELECT * from users WHERE 
    username=$1
    `, [username], (err, results) => {
        if (err) {
            throw err
        }
        else {
            console.log(results.rows);
            if (results.rows.length > 0) {
                const User = results.rows[0];
                if (!User) {
                    return res.json({ status: 'error', error: ' invalid' })
                }
                if ( bcrypt.compare(password, User.password)) {
                    const accessToken = jwt.sign({
                        id: User.id,
                        username: User.username
                    }, "access", { expiresIn: '20s' })
                    accessTokens = JSON.stringify(accessToken);


                    const refreshToken = jwt.sign({
                        id: User.id,
                        username: User.username
                    }, "refresh", { expiresIn: '24h' })

                    return res.json({ status: 'ok', data: accessToken, data2: refreshToken })
                }

                res.json({ status: 'error', data: 'invalid ' })

            }


        }

    })

    // console.log(user.password)



})


module.exports = router;
