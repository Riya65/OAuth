const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT= process.env.PORT || 5000;
const mongoose = require('mongoose');

//DB CONFIG

const db = require('./config/keys').MongoURI;
mongoose.connect(db, {useNewUrlParser: true})
.then(()=> console.log('MongoDB COnnected....'))
.catch(err=> console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({extended: false}));

//Routes

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


app.listen(PORT, console.log(`Server started on port ${PORT}`));
