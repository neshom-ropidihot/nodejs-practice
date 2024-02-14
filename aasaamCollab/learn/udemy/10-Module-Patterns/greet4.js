function Greetr() {
    this.greeting = "hello world 4";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;