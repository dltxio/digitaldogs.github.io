# Digtal Dogs

## Contracts

| Network | Owner | Name |
|---|---|---|

### Rinkeby

https://rinkeby.etherscan.io/address/0x4b68878E484120fDdE766E1423aFD8d7eA3e2e35

`Testnet:`
  `HDWalletProvider:https://rinkeby.infura.io/v3/`
  `ContractAddress: "0x4b68878E484120fDdE766E1423aFD8d7eA3e2e35"`
  `WebsocketProvider:wss://rinkeby.infura.io/ws/v3/`


Owner: `0x57A4218BF3Fd3936B22B44034117Fbb4750fbaF6`  Key: ``
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
   > transaction hash:    0xcdd4767b9dd5fc1b2474d2dd9e655bd8a60cd8b29ddee007e7a0bd70a9fee9ff
   > Blocks: 0            Seconds: 9
   > contract address:    0xEa31753cc5CFC9404813f76BbC3f2aea2e6E8831
   > block number:        7733506
   > block timestamp:     1608178925
   > account:             0x57A4218BF3Fd3936B22B44034117Fbb4750fbaF6
   > balance:             0.69671242
   > gas used:            164379
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00328758 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7733507)
   > confirmation number: 2 (block: 7733508)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00328758 ETH


2_deploy_contracts.js
=====================

   Deploying 'DogERC721'
   ---------------------
   > transaction hash:    0x8b33ed6a0777703c10f04271bbd3f68b81c12d1a5fe5615fc3ddb24314599d24
   > Blocks: 1            Seconds: 21
   > contract address:    0xEAa79124cAa49d1b1Bf656e8c3Cc777dccAD125B
   > block number:        7733511
   > block timestamp:     1608179000
   > account:             0x57A4218BF3Fd3936B22B44034117Fbb4750fbaF6
   > balance:             0.6261946
   > gas used:            3483550
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.069671 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7733512)
   > confirmation number: 2 (block: 7733513)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:            0.069671 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.07295858 ETH