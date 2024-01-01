const calc = require('./03-module-calc-part-02');
console.log( require('./03-module-calc-part-02'));

console.log(calc.additionExport(5, 2));
console.log(calc.subtraction(5, 2));

const {additionExport, subtraction} = require('./03-module-calc-part-02');
console.log(additionExport(5, 3));
console.log(subtraction(5, 3));

