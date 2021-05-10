const { Blockchain,Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('541e2caf2e88293a998fe7d98249be0935b52aa7786d162e840406c7fa23cb63');
const myWalletAddress = myKey.getPublic('hex');

let plumCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public address', 10);
tx1.signTransaction(myKey);
plumCoin.addTransaction(tx1);


console.log('\n Starting the miner.');
plumCoin.minePendingTransactions(myWalletAddress);


console.log('\nDaniels balance is', plumCoin.getBalanceOfAddress(myWalletAddress));

plumCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', plumCoin.isChainValid());

// console.log('MIning block 1....');

// plumCoin.addBlock(new Block(1, "09/05/2021", {amount: 4}))

// console.log('MIning block 2....');
// plumCoin.addBlock(new Block(2, "08/05/2021", {amount: 10}))

// console.log('Is blockchain valid? ' + plumCoin.isChainValid());

// plumCoin.chain[1].transactions = { amount: 100};
// plumCoin.chain[1].hash = plumCoin.chain[1].calculateHash();

// console.log('Is blockchain valid? ' + plumCoin.isChainValid());

// console.log(JSON.stringify(plumCoin, null, 4));