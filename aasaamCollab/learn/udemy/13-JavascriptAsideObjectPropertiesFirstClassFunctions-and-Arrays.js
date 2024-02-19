var obj = {
    greet: 'hello',
}

console.log(obj);

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);


var arr = [];

console.log(arr);

arr.push(function() {
    console.log('hello world 1');
});

console.log(arr);

arr.push(function() {
    console.log('hello wolrd 2');
})

arr.push(function() {
    console.log('hello wolrd 2');
})


console.log(arr);

arr.forEach(function(item) {
    item();
});