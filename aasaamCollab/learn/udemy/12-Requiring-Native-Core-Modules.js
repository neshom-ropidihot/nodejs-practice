const util = require('util');
console.log(util);

var name = 'mohsen';
var greeting = util.format('hello %s ', name);
util.log(greeting);