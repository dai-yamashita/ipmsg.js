'use strict';
// tcp sample
// https://gist.github.com/tedmiston/5935757

var net = require('net');

var client = new net.Socket();
// client.connect(2425, '127.0.0.1', function(){
//     client.write('1:123456678:pepepe:peccu-pro:1:pepepe\0hogegp\0');
// });

client.connect(5000, '127.0.0.1', function() {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
    console.log('Received: ' + data);
    client.destroy(); // kill client after server's response
});

client.on('close', function() {
    console.log('Connection closed');
});
