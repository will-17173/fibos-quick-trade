const client = require('./client');
const res = client.getAccount();

console.log('ram_quota: ' + res.ram_quota);
console.log('ram_usage: ' + res.ram_usage);

module.exports = {
    quota: res.ram_quota,
    available: res.ram_quota - res.ram_usage
}