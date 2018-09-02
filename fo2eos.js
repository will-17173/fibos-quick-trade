const client = require('./client')
const balance = require('./balance')
let amount = process.argv[2];

if(amount == 'all'){
    amount = balance.fo;
} else if(amount == 'half'){
    amount = (balance.fo / 2).toFixed(4);
} else if(amount == 'quarter'){
    amount = (balance.fo / 4).toFixed(4);
} else{
    if(!/^[0-9]+\.[0-9]{4}$/.test(amount)){
        console.error('请输入正确的转帐数值，精确到小数点后4位');
        return;
    }
}

var res = client.exchangeEOS(amount + " FO");
// console.log(res);
if(res.broadcast){
    console.log('交易成功')
} else{
    console.error('交易失败')
}