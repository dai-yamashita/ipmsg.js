'use strict';
// commandline sample
// http://oscar-mejia.com/blog/how-to-create-a-command-line-program-with-nodejs/

var commander = require('commander');

commander
    .version('1.0.0');

commander
    .command('')
    .description('show help')
    .action(function(){
        console.log('hogehoge');
    });

commander
    .command('hi')
    .description('respond greetings')
    .action(function(){
        console.log('Hi there');
    });

commander
    .command('bye [name]')
    .description('initialize project configuration')
    .action(function(name){
        console.log('Bye ' + name + '. It was good to see you!');
    });

commander
    .command('*')
    .action(function(env){
        console.log('Enter a Valid command');
    });

commander.parse(process.argv);

if (!process.argv.slice(2).length) {
    commander.outputHelp();
}