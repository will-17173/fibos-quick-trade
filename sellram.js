const client = require('./client');
const amount = process.argv[2];
const balance = require('./ram')
const available = balance.available;

if(amount == 'all'){
    amount = available;
} else if(amount == 'half'){
    amount = Math.floor(available / 2)
} else if(amount == 'quarter'){
    amount = Math.floor(available / 4);
} else{
    if(!isNaN(amount)){
        console.error('请输入正确的数值');
        return;
    }
}

var res = client.sellram(amount)
console.log(res);
if(res.broadcast){
    console.log('交易成功')
} else{
    console.error('交易失败')
}