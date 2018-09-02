const client = require('./client')
const balance = require('./balance')
let amount = process.argv[2];

if(amount == 'all'){
    amount = balance.eos;
} else if(amount == 'half'){
    amount = (balance.eos / 2).toFixed(4);
} else if(amount == 'quarter'){
    amount = (balance.eos / 4).toFixed(4);
} else{
    if(!/^[0-9]+\.[0-9]{4}$/.test(amount)){
        console.error('请输入正确的转帐数值，精确到小数点后4位');
        return;
    }
}

var res = client.exchangeFO(amount + " EOS");
// console.log(res);
if(res.broadcast){
    console.log('交易成功')
} else{
    console.error('交易失败')
}