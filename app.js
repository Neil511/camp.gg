// Required Modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    request = require('request'),
    logger = require('morgan'),
    path = require('path'),
    url = require('url'),
    http = require('http');

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
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// var options = {
//     protocol: 'http:',
//     host: 'na.api.pvp.net',
//     path: '/api/lol/na/v1.4/summoner/by-name/Nubsee?api_key=23a00ef6-0a77-4aa2-b278-8d402f4e720c',
//     host: 'wwww.google.com',
//     headers: {
//         'User-Agent': 'Riot-Games-Developer-Portal',
//         'Accept-Language': 'en-US',
//         'Accept-Charset': 'ISO-8859-1,utf-8',
//         'Origin': 'https://developer.riotgames.com'
//     }
// };

request("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/Nubsee?api_key=23a00ef6-0a77-4aa2-b278-8d402f4e720c"
, function(err, res, body){
    if(!err && res.statusCode == 200){
        console.log(body);
    }
})

app.listen(3000, function(){
  console.log('listening on *:3000');
});

