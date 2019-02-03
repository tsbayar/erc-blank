var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = ''

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      from: ""
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "")
      },
      network_id: '*',
      gas: 6000000,
      gasPrice: 30000000000
    }
  }
}
