const express = require('express')
const mongoose= require('mongoose');
const router= express.Router();

const bcrypt = require('bcryptjs');
const path= require('path');
const bodyParser= require('body-parser')
const {pool}= require('../dbConfig');

mongoose.connect('mongodb://localhost:27017/login-db_jwt', {
    useNewurlParser: true,
    useUnifiedTopology: true,


})

router.post('/api/register', async (req, res) => {
    
    try{
        
    const { username, password: plainText } = req.body;
    
    if (!username || typeof username !== 'string') {
        return res.json({ status: 'error', error: 'Invalid username' })
    }
    if (!plainText || typeof plainText !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' })
    }
    if (plainText.length < 5) {
        return res.json({ status: 'error', error: 'password should be at least 6 characters' })
    }
    
    const password = await bcrypt.hash(plainText, 10)
   

    try{
        const response =  pool.query(
            `SELECT * FROM users
            WHERE username = $1`,
            [username],
            (err,results)=>{
                if(err){
                    console.log("is this the eror exist")
                    throw err
                }
                
                    
                // console.log(results.rows);

                if(results.rows.length>0){
                    return res.json({status: 'error', error:"Username is already existed"})
                }else{
                    pool.query(`
                    INSERT INTO users (username,password)
                    VALUES ($1,$2)
                    RETURNING id, password
                    `,[username,password],(err,results)=>{
                        if(err){console.log("is this error part create")
                            throw err;}
                        
                         else{
                             return res.json({status: 'ok' ,message:'User is Created'})
                         }
                    })
                    console.log('user is created ');
                }
            }
        )
        
    }catch(err){
        console.log(err);
        if (err) {
            console.log('is this this another error')
            return res.json({ status: 'error', error: 'Username is already existed' })
        }
    
    }

    }catch(err){
        console.log('or is this error')
        throw err
        
    }
   
   
    // res.json({ status: 'ok' })

    
})

module.exports = router;


