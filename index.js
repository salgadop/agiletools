//inicio
var fs = require('fs');
var https = require('https');
//var WebSocketServer = require('ws').Server;
var express = require("express");
var bodyParser = require("body-parser");

var serverConfig = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
};

var app = express();
var HTTPS_PORT = 8080;

var httpsServer = https.createServer(serverConfig, app).listen(HTTPS_PORT);

//jade

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

//var wss = new WebSocketServer({server: httpsServer});

//wss.on('connection', function(ws) {
//    ws.on('message', function(message) {
//        wss.broadcast(message);
//    });
//});

//wss.broadcast = function(data) {
//    for(var i in this.clients) {
//        this.clients[i].send(data);
//    }
//};

app.get(/^(.+)$/, function(req, res){ 
    switch(req.params[0]) {
        case '/conector_tiempo':
            res.render('conector_tiempo',{title:'Home'});
            break;
	case '/historias_usuario':
            res.render('historias_usuario',{title:'Home'});
            break;
    default: res.sendFile( __dirname + req.params[0]); 
    }
 });

console.log('Servidor corriendo');
