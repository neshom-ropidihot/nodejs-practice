var greet1 = require('./greet1');
greet1();


// var greet2 = require('./greet2');

// console.log(greet2);

// greet2.greet();


var greet2 = require('./greet2').greet;

console.log(greet2);

greet2();



var greet3 = require('./greet3');

console.log(greet3);

greet3.greet();
greet3.greeting = "changed hello wolrd!";

var greet3b = require('./greet3');

console.log(greet3b);

greet3b.greet();



var Greet4 = require('./greet4');

console.log(Greet4);

var grt = new Greet4();

console.log(grt);

grt.greet();
grt.greeting = "changed hello wolrd !";
grt.greet();

var grtb = new Greet4();
grtb.greet();




var greet5 = require('./greet5').greet;
greet5()
