var FibosClient = require("./fibos_client.js");

config = {
    eosPriKey: 'EOS帐号私钥',
    eosAccount: "EOS帐号名",
    fibosAccount: "FIBOS帐号名",
    fibosPubKey: 'FIBOS公钥',
    fibosPriKey: 'FIBOS私钥'
}

module.exports = new FibosClient(config);