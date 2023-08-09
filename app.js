const express = require('express');
const app = express();
const PORT = 8080;
const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.set('view engine', 'ejs');


app.listen(PORT, ()=>{
    console.log('Server is on port:' + PORT);
})

