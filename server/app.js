const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-Parser');
const path = require('path');
const app = express();
const api = require('./Routes/index');
const recipe= require('./Routes/recipes');
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

//app.use('/api', api);
//app.use('/', (req, res)=>{
   // res.send('More-Recipe');
//});
//app.get('*', (req, res)=> res.status(200).send({message: 'welcome to postgress tuturial.'}));


//routes
app.get('/api/recipes', recipe.all);
app.get('/api/recipes/:recipeId', recipe.one);
app.get('/api/recipes', recipe.add);


module.exports = app;