//allow us to access .env variables
require('dotenv').config()

//import our dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//setup our port #
const PORT = process.env.PORT || 3000;

//initialize our app
const app = express();

//allow morgan to log information on each request to the server
app.use(logger('dev'));

//middleware needed to properly parse the body of requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//allow app to use static assets from public directory
app.use(express.static(path.join(__dirname, 'public')));

//set up our view engine using ejs
//set up app to serve views from views directory
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

//allows us to make PUT and DELETE requests with a form
app.use(methodOverride('_method'));

// app.use('/auth', authRouter);

//render index view when root is hit
app.get('/', (req, res) => {
    res.render('index');
})

app.use("*", (err,req, res, next) => {
    res.status(400).json({
      error: err,
      message: err.message
    })
})

// render json object for server errors
app.use((err, req, res,next) => {
    console.log(err)
    res.status(500).json({
      error: err,
      message: err.message
    })
  })

app.listen(PORT,()=> {
  console.log(`Server up and listening on port ${PORT}`);
})
//render a json object for any route not defined by app


