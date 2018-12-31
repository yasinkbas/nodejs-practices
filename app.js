// Modules
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');

// Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookRouter = require('./routes/books');

// App
var app = express();

// mongodb://host/dbname
mongoose.connect('mongodb://localhost/udemy', { useNewUrlParser: true})
mongoose.connection.on('open', () => {
    console.log('MongoDB: Connected');
});
mongoose.connection.on('error', (err) => {
    console.log("MongoDB: Error: ", err);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// view engine
nunjucks.configure('views', {
    express: app,
    autoescape: true
});
app.set('view engine', 'html');

// Urls
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books',bookRouter);

module.exports = app;
