const axios = require('axios');

setInterval(() => {
    axios.get('https://explorer.fibos.rocks/api/resource')
        .then(res => {
            console.log(res.data.eos_fo_price)
        })
}, 1000)