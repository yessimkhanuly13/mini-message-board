const express = require('express');
const app = express();
const PORT = 8080;
const indexRouter = require('./routes/index');


app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(PORT, ()=>{
    console.log('Server is on port:' + PORT);
})

