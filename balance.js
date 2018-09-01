const client = require('./client')

var res = client.getBalance();
console.log(res.rows[0].balance.quantity);
console.log(res.rows[1].balance.quantity);