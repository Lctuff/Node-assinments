const EventEmitter = require('events');
var url = 'http://mylogger.io/log';
class Logger extends EventEmitter{
    firstCatch(message){
        console.log(message);
        this.emit('messageLogged', 'First Listener Called!\n');
    }
    secondCatch(message){
        console.log(message);
        this.emit('messageLogged', 'Second Listener Called!\n');
    }
    thirdCatch(message){
        console.log(message);
        this.emit('messageLogged', 'Third Listener Called!\n');
    }
}
module.exports = Logger;