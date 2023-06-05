const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) =>{console.log(arg)});

logger.firstCatch('Calling First Listener...');
logger.secondCatch('Calling Second Listener...');
logger.thirdCatch('Calling Third Listener...');