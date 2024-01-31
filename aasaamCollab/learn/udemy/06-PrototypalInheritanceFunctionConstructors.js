function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

console.log(Person);


var john = new Person('john', 'doe');
console.log(john);
console.log(john.firstname);



console.log(Person.prototype);
console.log(john.__proto__);


Person.prototype.greet = function() {
    console.log("hi " + this.firstname + ' ' + this.lastname);
};

console.log(Person.prototype);

john.greet();



var jane = new Person('jane', 'doe');

console.log(jane);
console.log(jane.firstname);


jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);

console.log(john.__proto__ === jane.__proto__);