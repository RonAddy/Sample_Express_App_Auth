//allow us to access .env variables. Will be use to retrieve secret key for sessions
// require('dotenv').config()


const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const session = require('express-session')
//importing the authRouter into the app
// const authRouter = require('./services/auth/AuthRouter')

// const userRouter = require('./routes/user-router')


const PORT = process.env.PORT || 3000;


const app = express();

app.use(logger('dev'));

// set the secret using the SERVER_SECRET key stored in the .env file
// app.set('server_secret', process.env.SERVER_SECRET);

//allow app to create session for users using SERVER_SECRET key. Other options are boilerplate.
// app.use(session({
//   secret:            app.get('server_secret'),
//   resave:            false,
//   saveUninitialized: false,
// }));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));


app.use(methodOverride('_method'));

// app.use('/auth', authRouter);
// app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.render('index');
})

//allow app to send a json object for routes our app does not recognize
// app.use("*", (err,req, res, next) => {
//     res.status(400).json({
//       error: err,
//       message: err.message
//     })
// })

// render json object for server errors
// app.use((err, req, res,next) => {
//     console.log(err)
//     res.status(500).json({
//       error: err,
//       message: err.message
//     })
//   })

app.listen(PORT,()=> {
  console.log(`  🚕   💨     🏃  🚧  ${PORT} 🚧 `);
})



