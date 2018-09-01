const client = require('./client')
const balance = require('./balance')
const amount = process.argv[2];

var res = client.exchangeEOS("1.0000 FO");
console.log(res);