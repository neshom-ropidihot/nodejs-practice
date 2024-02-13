var greeting = require('./greeting');

// var greet = function() {
//     console.log('hello');
// }

var greet = function() {
    console.log(greeting.en);
}

module.exports = greet;

console.log('1' , module);