'use strict';
// file save sample
// https://docs.nodejitsu.com/articles/file-system/how-to-write-files-in-nodejs

var fs = require('fs');
fs.writeFile('logfile.log', 'hogehoge\nfugafuga\n', function(err){
    if(err) throw err;
    console.log('saved');
});
