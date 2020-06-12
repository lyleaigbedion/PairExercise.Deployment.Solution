const fs = require('fs');

console.log(fs.readFileSync('.tmp.token.enc').toString('base64'))
