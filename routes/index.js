const express = require('express');
const router = express.Router();
const messages = require('../messages');

router.use((req, res, next)=>{
    console.log('Time: ', Date.now());
    next()
})

router.get('/', (req, res)=>{
    res.render('index', {text:"dsdsds", messages: messages})
})

router.post('/new', (req, res)=>{
    const name  = req.body.name;
    const msg = req.body.message;
    const data = {
        text:msg, 
        user:name, 
        added: new Date()
    };
    messages.push(data);
    console.log(messages);
    res.redirect('/');
})

module.exports = router;