### Rinkeby

https://rinkeby.etherscan.io/address/0x4b68878E484120fDdE766E1423aFD8d7eA3e2e35


`Testnet:`
  `HDWalletProvider:https://rinkeby.infura.io/v3/`
  `ContractAddress: "0x4b68878E484120fDdE766E1423aFD8d7eA3e2e35"`
  `WebsocketProvider:wss://rinkeby.infura.io/ws/v3/`

Owner: `0x06D3072D44F451232e0dC8dB323759300Bc8477F`  
Contract: `0x4b68878E484120fDdE766E1423aFD8d7eA3e2e35`

### Mainnet 

| Version | Contract | Owner |
|---|---|---|
| v0.1 | `0x397A3e67a93C11F171ab04bF5Cc91101f9eDd84F` | `0x397A3e67a93C11F171ab04bF5Cc91101f9eDd84F` |
| v0.2 | `0x8f41dbc402d8f110f4ab8d551f41b821cbff0376` | `0x397A3e67a93C11F171ab04bF5Cc91101f9eDd84F` |
| v0.3 | `0xe8542aa6c1e79eec8e30e2d5b1bc6dd20abc975c` | `0x397A3e67a93C11F171ab04bF5Cc91101f9eDd84F` |
| v0.4 | `0x4390282c7d623edee9aacb971303077aba2d5e14` | `0x397A3e67a93C11F171ab04bF5Cc91101f9eDd84F` |  


### Other

Mainnet owner MEW Connect `0x5695d8049763b985B310F9047A0bD5376580B56C`

## Links

`https://rinkeby.opensea.io/assets/0x3cfa8ea36fc9bef5c666af8a5fa2d27960cd030c/0`

`https://opensea.io/assets/0x8f41dbc402d8f110f4ab8d551f41b821cbff0376/0` (Working in trust v2)

`https://opensea.io/assets/0x4390282c7d623edee9aacb971303077aba2d5e14/0`

## Address verification

```
Digital Dogs Australia (DigitalDogs.io) own the address 0xa6f0525721fB73d7009165a298f106f2C8a5b90a 
```

```
{
  "address": "0xa6f0525721fb73d7009165a298f106f2c8a5b90a",
  "msg": "Digital Dogs Australia (DigitalDogs.io) own the address 0xa6f0525721fB73d7009165a298f106f2C8a5b90a",
  "sig": "0x51a3477b2b9cededeb1dbb08ab54849a1c81f73eac06530cc333fe4fbb72e9056f84aae9c04956e79aa99ec569e142e37e6158acf44b0a0b54d27ac3ac5149b41c",
  "version": "3",
  "signer": "ledger"
}
```

## Local

```bash
nvm use 12.8.3
yarn install
yarn start
```

## github pages
yarn deploy 

## Registering a contract on Etherscan

The source code will need to be flattened to register a contract on Etherscan.

To flatten the contract code:

```bash
cd /path/to/project/files/
npx truffle-flattener contracts/DogERC721.sol > build/DogERC721.flattened.sol
```

Go to Etherscan (https://etherscan.io/) and load the contract. There will be a
"verify" link. Click on this link and specify the following:

Contract Type: single file
Contract Compiler Version: 0.6.0

(There are now two other Contract Types for registering source code; multi-file, and json; these are experimental and will require more investigation).