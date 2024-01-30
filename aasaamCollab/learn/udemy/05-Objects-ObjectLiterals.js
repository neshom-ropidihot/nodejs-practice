var person = {
    name: 'John',
    lastname: 'Doe',
    greet: function() {
        console.log('Hello, ' + this.name + ' ' + this.lastname);
    }
}

person.greet();
console.log(person.name);
console.log(person['name']);