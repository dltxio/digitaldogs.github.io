# Digtal Dogs

## Contracts

| Network | Owner | Name |
|---|---|---|

### Rinkeby

HDWalletProvider:https://rinkeby.infura.io/v3/  
ContractAddress: "0x781b734a4c85e57F91138a02012fC186Ec1D3C41"  
WebsocketProvider:wss://rinkeby.infura.io/ws/v3/  

Owner: `0x57A4218BF3Fd3936B22B44034117Fbb4750fbaF6`  
Key:  
Contract: `0x781b734a4c85e57F91138a02012fC186Ec1D3C41`  

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

```json
{
  "address": "0xa6f0525721fb73d7009165a298f106f2c8a5b90a",
  "msg": "Digital Dogs Australia (DigitalDogs.io) own the address 0xa6f0525721fB73d7009165a298f106f2C8a5b90a",
  "sig": "0x51a3477b2b9cededeb1dbb08ab54849a1c81f73eac06530cc333fe4fbb72e9056f84aae9c04956e79aa99ec569e142e37e6158acf44b0a0b54d27ac3ac5149b41c",
  "version": "3",
  "signer": "ledger"
}
```

## Flattern the contracts

```bash
cd /path/to/project/src/
npx truffle-flattener contracts/DogERC721.sol > build/contracts/DogERC721.flattened.sol
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

## Notes

Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x6249788f26d9d59744e57f800b269c6852493e5d17b0f7dabc1b12e3cda540e1
   > Blocks: 1            Seconds: 14
   > contract address:    0xC298F0b4E6Bf3605bB7259b76f4ea663fAdF7A3e
   > block number:        7739734
   > block timestamp:     1608272891
   > account:             0x57A4218BF3Fd3936B22B44034117Fbb4750fbaF6
   > balance:             0.542948767
   > gas used:            164379
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00328758 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7739735)
   > confirmation number: 2 (block: 7739736)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00328758 ETH


2_deploy_contracts.js
=====================

   Deploying 'DogERC721'
   ---------------------
   > transaction hash:    0x8edf682424cdb693f5ac8ed2ef6321d6f255025bd0838e5ade60dc06a2841969
   > Blocks: 2            Seconds: 21
   > contract address:    0x72b4b5EaD44F1e3C50bea63bfDA56cf445662013
   > block number:        7739739
   > block timestamp:     1608272966
   > account:             0x57A4218BF3Fd3936B22B44034117Fbb4750fbaF6
   > balance:             0.463616747
   > gas used:            3924260
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0784852 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7739740)
   > confirmation number: 2 (block: 7739741)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0784852 ETH


Summary
=======
> Total deployments:   2
