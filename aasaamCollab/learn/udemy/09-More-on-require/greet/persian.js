var greeting = require('./greeting.json');

// var greet = function() {
//     console.log('salam');
// }

var greet = function() {
    console.log(greeting.fa);
}

module.exports = greet;

console.log('2', module);