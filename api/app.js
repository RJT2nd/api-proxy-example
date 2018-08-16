// app.js
var express = require('express');
var app = express();

// routes
var testController = require('./testController')
app.use('/', testController);


module.exports = app;
