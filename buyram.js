const client = require('./client');
const amount = process.argv[2];
const balance = require('./balance')

if(amount == 'all'){
    amount = balance.fo;
} else if(amount == 'half'){
    amount = (balance.fo / 2).toFixed(4);
} else if(amount == 'quarter'){
    amount = (balance.fo / 4).toFixed(4);
} else{
    if(!/^[0-9]+\.[0-9]{4}$/.test(amount)){
        console.error('请输入正确的数值，精确到小数点后4位');
        return;
    }
}

var res = client.buyram(amount + " FO");
console.log(res);