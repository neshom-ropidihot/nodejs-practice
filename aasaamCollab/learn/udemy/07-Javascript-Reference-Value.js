// pass by value

function change(b) {
    b = 2;
}

var a = 1;
console.log(a);


change(a);
console.log(a);


// pass by refrence

function changeObj(d) {
    d.pr1 = function() {};
    d.pr2 = {};
}

var c = {};

console.log(c);

c.pr1 = {};

console.log(c);

changeObj(c);

console.log(c);