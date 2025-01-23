const SHA256 = require("crypto-js/sha256");

class cryptoBlock {
  constructor(index, timestamp, data, precedingHash = " ") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }
  computeHash() {
    return SHA256(
      this.index +
        this.precedingHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }
  proofOfWork(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}

class CryptoBlockchain {
  constructor() {
    this.blockchain = [this.startGenesisBlock()];
    this.difficulty = 4;
  }
  startGenesisBlock() {
    return new cryptoBlock(0, "23/01/2025", "Initial Block in the Chain", "0");
  }
  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }
  addNewBlock(newBlock) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    newBlock.proofOfWork(this.difficulty);
    this.blockchain.push(newBlock);
  }
  checkChainValidity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const precedingBlock = this.blockchain[i - 1];

      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }
      if (currentBlock.precedingHash !== precedingBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

const start = Date.now();

let testCoin = new CryptoBlockchain();

console.log("testCoin mining in progress....");

testCoin.addNewBlock(
  new cryptoBlock(1, "24/01/2025", {
    sender: "John Smith",
    recipient: "Will Smith",
    quantity: 69,
  })
);
testCoin.addNewBlock(
  new cryptoBlock(2, "25/01/2025", {
    sender: "Aladin",
    recipient: "Will Smith",
    quantity: 420,
  })
);

console.log(JSON.stringify(testCoin, null, 4));
const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
