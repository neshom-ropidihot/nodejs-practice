var english = require('./english');
var persian = require('./persian');

console.log('3', english);
console.log('4', persian);

module.exports = {
    english: english,
    persian: persian
}

console.log('5', module);