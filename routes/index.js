const express = require('express');
const router = express.Router();
const messages = require('../messages');

router.use((req, res, next)=>{
    console.log('Time: ', Date.now());
    next()
})

router.get('/', (req, res)=>{
    res.render('index', {text:"dsdsds", messages:messages})
})

module.exports = router;