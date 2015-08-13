var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();

logger.on('error', function(msg) {
	console.error('ERR: ', msg);
});

logger.on('warn', function(msg) {
	console.warn('WARN: ', msg);
});

logger.on('info', function(msg) {
	console.info('INFO: ', msg);
});

logger.emit('error', 'Spilled Milk');
logger.emit('error', 'Eggs Cracked');
logger.emit('test', 'Test');