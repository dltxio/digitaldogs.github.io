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
          providerOrUrl: process.env.RINKEBY_NODE
        })
      },
      network_id: "4",
      gas: 4500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    development: {
      host: "localhost", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "5777" // Any network (default: none)
    }
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    reporter: "eth-gas-reporter",
    reporterOptions: {
        currency: "AUD",
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.2"
    }
  }
};
