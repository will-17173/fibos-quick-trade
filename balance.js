const client = require('./client')

var res = client.getBalance();
console.log(res.rows[0].balance.quantity);
console.log(res.rows[1].balance.quantity);

module.exports = {
    eos: res.rows[0].balance.quantity.split(' ')[0] * 1,
    fo: res.rows[1].balance.quantity.split(' ')[0] * 1
};