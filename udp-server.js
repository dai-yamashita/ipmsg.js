'use strict';
// udp sample
// http://www.hacksparrow.com/node-js-udp-server-and-client-example.html

var fs = require('fs');
var commands = JSON.parse(fs.readFileSync('commands.json', 'utf8'));
var conf = JSON.parse(fs.readFileSync('conf.json', 'utf8'));


var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function(){
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ':' + address.port);

    
    
});

server.on('message', function(message, remote){
    console.log(remote.address + ':' + remote.port + ' - ' + message);
});

server.bind(conf.port, conf.host);
