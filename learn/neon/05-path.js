const path = require('path');
console.log(path);

console.log('path parser => ', path.parse(__dirname));
console.log('path parser file name=> ', path.parse(__filename));