// app.js
var express = require('express');
var app = express();
var proxy = require('http-proxy-middleware');

// routes
var testController = require('./testController')
app.use('/', testController);

// proxy
app.use('/api', proxy({target: 'http://localhost:8080', changeOrigin: true}));

module.exports = app;
