# TronWeb Fluence Wrapper

This project wraps most of [TronWeb](https://github.com/tronprotocol/tronweb) into Fluence services.
While this wrapper is experimental it should be a great jumping off point for anyone who wants to build anything with Tron in the Fluence ecosystem.

## How to Use
**Recommended nodejs version: 16**

Install dependencies:
```
yarn
```
Run Fluence services:
```
yarn start
```

You can also change Fluence and Tron network settings in ```settings.json```. By default this project connects to ```krasnodar[0]``` and the shasta test network.

## How to run the tests
1. First start the Fluence services: ```yarn start```
2. Next grab the `Peer ID` and `Relay ID` from the terminal output and put them into `tests/address.aqua`. This is needed because otherwise the test script won't be able to find our services.
3. Finally you can run the tests.
```
yarn start:tests:trx
yarn start:tests:event
yarn start:tests:tronweb
```
Note: These tests were written for the shasta test network, and they are only used to demonstrate the capabilities of this wrapper library

## Modules

Most of the [TronWeb](https://github.com/tronprotocol/tronweb) JS library is wrapped and functional. There are very minimal differences in implementation. You should be able to use the official [TronWeb documentation](https://developers.tron.network/docs/tron-web-intro) and [source code](https://github.com/tronprotocol/tronweb) to use this wrapper.

- [x] TronWeb - 27/29 functions wrapped
- [x] Event - 3/3 functions wrapped
- [x] Trx - 65/65 functions wrapped
- [x] SideChain - 21/24 functions wrapped
- [x] TransactionBuilder 22/38 functions wrapped
- [ ] Plugin - It would be extremely difficult to support plugins through aqua, so this isn't implemented

### Credits
Since Fluence is a relatively new and complex technology, I took some inspiration from this other great project:
https://github.com/ntrotner/web3-exposed-to-fluence
