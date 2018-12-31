// Modules
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// App
var app = express();

// mongodb://host/dbname
mongoose.connect('mongodb://localhost/udemy', { useNewUrlParser: true})
    .then(() => {
        console.log('Mongodb is connected');
    })
    .catch((err) => {
        console.log('mongodb error :',err)
    })

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
