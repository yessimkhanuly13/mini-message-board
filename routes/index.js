const express = require('express');
const router = express.Router();
const messages = require('../messages');

router.use((req, res, next)=>{
    console.log('Time: ', Date.now());
    express.json();
    next()
})

router.get('/', (req, res)=>{
    res.render('index', {text:"dsdsds", messages: messages})
})

router.post('/new', (req, res)=>{
    console.log(req.body);
})

module.exports = router;