const express = require('express');
const user_route = new express.Router()

user_route.get('/', (req, res)=>{
    console.log('get request to /')
    res.send('normal get request to /')
})

module.exports = user_route