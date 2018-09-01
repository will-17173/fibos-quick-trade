const client = require('./client');
const amount = process.argv[2];

if(!/^[0-9]+\.[0-9]{4}$/.test(amount)){
    console.error('请输入转帐数值');
    return;
}
var res = client.transferEOS(amount + " EOS");
console.log(res)