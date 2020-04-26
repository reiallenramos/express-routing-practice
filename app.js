var express = require('express');
var app = express();

var homeRouter = require('./routes/home')
var usersRouter = require('./routes/users');

app.use('/', homeRouter);
app.use('/users', usersRouter);

module.exports = app;