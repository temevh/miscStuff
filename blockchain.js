const SHA256 = require("crypto-js/sha256");

class cryptoBlock {
  constructor(index, timestamp, data, precedingHash = " ") {
    this.indes = index;
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
