# Finder

1. Clone the repo by

`git clone https://github.com/theoopsguy/finder.git`

which creates the “finder” directory.

2. Install Lossless SDK and other packages there by

`npm install`

3. Choose the `Rinkeby` testnet and the wallet that you will be using for finding by editing `lossless.config.js`.

4. Get some Rinkeby testnet ETH. These faucets worked for us:[https://faucet.paradigm.xyz/](https://faucet.paradigm.xyz/) and [https://rinkebyfaucet.com/](https://rinkebyfaucet.com/) .

5. Get some Rinkeby testnet LSS tokens from [https://faucet.lossless.cash/](https://faucet.lossless.cash/)

6. Approve the LSS reporting smart contract. You can find the relevant addresses on various networks at [https://lossless-cash.gitbook.io/lossless/technical-reference/hack-mitigation-protocol/deployments](https://lossless-cash.gitbook.io/lossless/technical-reference/hack-mitigation-protocol/deployments) . One way to execute the approval is to go the relevant token contract on Etherscan and connect your web3 wallet, the right address on Rinkeby is [https://rinkeby.etherscan.io/address/0x7b8b89d8b85a166f3edec3073cec4966f6c2fe76#writeContract](https://rinkeby.etherscan.io/address/0x7b8b89d8b85a166f3edec3073cec4966f6c2fe76#writeContract) . After connecting your web3 wallet to Etherscan, click “approve”. Enter “0x21e9E944F5Fd62A3333C7a8F2C89747014179dbc” as “spender (address)” and, for example, 10000000000000000000000000 as “amount (uint256)”.

7. Edit `index.js` such that `ADMIN_CONTRACT` is the contract that will be monitored for `OwnershipTransferred` events. Also edit `TOKEN_TO_PROTECT`. After the ownership is changed to the hacker wallet, the `TOKEN_TO_PROTECT` tokens in the hacker wallet are going to be reported and thus frozen.

8. Run the finder script `npm start` which produces the following output:

```
> finder@1.0.0 start
> node index.js
> Starting monitoring
```

9. Once the ownership is transferred, the wallet of the new owner of the `ADMIN_CONTRACT` will be reported and its `TOKEN_TO_PROTECT` tokens will be frozen. The reporting transaction will also be displayed at [https://platform-staging.lossless.cash/latest-transfers](https://platform-staging.lossless.cash/latest-transfers) .
