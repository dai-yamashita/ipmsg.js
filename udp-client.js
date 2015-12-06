'use strict';
// udp sample
// http://www.hacksparrow.com/node-js-udp-server-and-client-example.html

var fs = require('fs');
var commands = JSON.parse(fs.readFileSync('commands.json', 'utf8'));
var conf = JSON.parse(fs.readFileSync('conf.json', 'utf8'));

var dgram = require('dgram');
var server = dgram.createSocket('udp4');


// var ipm_client = function(){
var message = new Buffer('1:123456678:pepepe:peccu-pro:1:pepepe\0hogegp\0');
var client = dgram.createSocket('udp4');
client.setBroadcast(true);
var USER_NAME = 'pepepe';
var HOST_NAME = 'peccu-pro';
var GROUP_NAME = 'Node.js';

var generate_timestamp = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var create_message_string = function(params){
    if(!params){
        return null;
    }
    var version = params.version || '1';
    var date = new Date();
    var packet_no = date.getTime() + generate_timestamp(1, 1000);
    var user = params.user || USER_NAME;
    var host = params.host || HOST_NAME;
    var group = params.group || GROUP_NAME;
    var command = commands[params.command] || '';
    var option = group + '\0';
    if(params.option){
        option = params.option + '\0' + option;
    }
    var message = [
        version,
        packet_no,
        user,
        host,
        command,
        option
    ].join(':');
    console.log(message);
    console.log(message.split(':'));
    return new Buffer(message);
};


var send_message = function(params){
    var message =  create_message_string(params);
    client.send(message, 0, message.length, conf.port, conf.host, function(err, bytes) {
        if (err) throw err;
        console.log('UDP message sent to ' + conf.host + ':' + conf.port);
        client.close();
    });
};

//     var ipm_client = {};
//     ipm_client.send_message = send_message;
//     return ipm_client;
// };

// var ipm = new ipm_client();
var param = {
    'option': 'hogehoge',
    'command': 'IPMSG_BR_ENTRY'
};
send_message(param);
// message = new Buffer('1:123456678:pepepe:peccu-pro:32:testes');

// var client = dgram.createSocket('udp4');
// client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
//     if (err) throw err;
//     console.log('UDP message sent to ' + HOST + ':' + PORT);
//     client.close();
// });
