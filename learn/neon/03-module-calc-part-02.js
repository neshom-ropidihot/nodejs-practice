function addition (num1, num2) {
    return num1 + num2;
}

function subtraction (num1, num2) {
    return num1 - num2;
}

function multiplication (num1, num2) {
    return num1 * num2;

}

function division (num1, num2) {
     return num1 / num2;
}

// console.log(addition(5, 2));
// console.log(subtraction(5, 2));
// console.log(multiplication(5, 2));
// console.log(division(5, 2));

console.log(module);
module.exports.additionExport = addition;
console.log(module);
module.exports.subtraction = subtraction;
console.log(module);


module.exports = {
    multiplication: addition,
    division: subtraction,
}

// equal

module.exports = {
    multiplication,
    division,
}

console.log(module);