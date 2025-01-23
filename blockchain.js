const SHA256 = require("crypto-js/sha256");

class cryptoBlock {
  constructor(index, timestamp, data, precedingHash = " ") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
  }
  computeHash() {
    return SHA256(
      this.index +
        this.precedingHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
}

class CryptoBlockchain {
  constructor() {
    this.blockchain = [this.startGenesisBlock()];
  }
  startGenesisBlock() {
    return new cryptoBlock(0, "23/01/2025", "Initial Block in the Chain", "0");
  }
  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }
  addNewBlock(newBlock) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    newBlock.hash = newBlock.computeHash();
    this.blockchain.push(newBlock);
  }
}

let testCoin = new CryptoBlockchain();
testCoin.addNewBlock(
  new cryptoBlock(1, "24/01/2025", {
    sender: "John Smith",
    recipient: "Will Smith",
    quantity: 69,
  })
);
testCoin.addNewBlock(
  new cryptoBlock(1, "25/01/2025", {
    sender: "Aladin",
    recipient: "Will Smith",
    quantity: 420,
  })
);

console.log(JSON.stringify(testCoin, null, 4));
