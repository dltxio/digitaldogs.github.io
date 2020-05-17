const key = "60f54928d665c30e3055863a7254d0eb9dc5d4aa14ef2b1af230085c690adada";
const PrivateKeyProvider = require("truffle-privatekey-provider");

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",    // Any network (default: none)
    },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      //provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/${infuraKey}`, 0, 10),
      provider: () => new PrivateKeyProvider(key, "http://192.168.1.130:8545"),
      //host: "192.168.1.130",
      //port: 8545,
      network_id: 4,       // Rinkeby's id
      gas: 7000000         // Rinkeby has a lower block limit than mainnet
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.7"
    }
  }
}