const client = require('./client')
const amount = process.argv[2];

if(!/^[0-9]+\.[0-9]{4}$/.test(amount)){
    console.error('请输入正确的转帐数值，精确到小数点后4位');
    return;
}

var res = client.withdrawEOS(amount + " EOS")
// console.log(res)
if(res.broadcast){
    console.log('FIBOS转帐到EOS主链成功')
} else{
    console.error('交易失败')
}