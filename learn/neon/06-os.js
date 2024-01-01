const os = require('os');

console.log(os);


console.log('freemem => ', os.freemem());
console.log('totalmem => ', os.totalmem());
console.log('loadavg => ', os.loadavg());
console.log('hostname =>', os.hostname());