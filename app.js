// Required Modules
var express = require('express'),
    logger = require('morgan'),
    path = require('path'),
    url = require('url'),
    http = require('http');

var app = require('express')();

// Mime types Obj
var mimeTypes = {
    'html': 'text/html',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpeg',
    'png': 'image/png',
    'js': 'text/javascript',
    'css': 'text/css'
};

// Config
http.createServer(app);

// Middleware
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(){
  console.log('listening on *:3000');
});

