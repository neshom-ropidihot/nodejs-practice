//function statment

function greet() {
    console.log("hi");
}

greet();


// function first-class

function logGreeting(fn) {
    fn();
}

logGreeting(greet);


//function expression

var greetMe = function() {
    console.log('hi neshom');
}

greetMe();


//it is first-class
logGreeting(greetMe);


//use a function expression on the fly

logGreeting(function() {
    console.log('hello neshom');
});