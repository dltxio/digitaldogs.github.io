require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    rinkeby: {
      provider: () => {
        return new HDWalletProvider({
          mnemonic: {
            phrase: process.env.RINKEBY_MNEMONIC
          },
          providerOrUrl: process.env.RINKEBY_URL
        })
      },
      network_id: 4,
      gas: 4500000,
    },
    development: {
      host: "localhost", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "5777", // Any network (default: none)
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.2", // Fetch exact version from solc-bin (default: truffle's version)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
