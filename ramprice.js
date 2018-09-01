const client = require('./client');

setInterval(() => {
    console.log(client.getRamPrice());
}, 1000)