const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  parts: [],
  completeChain: "",
  getLength() {
    return this.parts.length
  },
  addLink(value) {
    // console.log(this.parts)
    // if (this.parts === []) {
    //   if (value === " ")
    //     this.parts.push(`(${value})`)
    //   else
    //     this.parts.push(`( ${value} )`)
    //   // this.completeChain += (`( ${value} )`)
    // }
    // else {
    //   if (value === " ")
    //     this.parts.push(`(${value})`)
    //   else
    //     this.parts.push(`( ${value} )`)
    //   // this.completeChain += (`~~( ${value} )`)
    // }
  },
  removeLink(position) {
    if (!this.parts.includes(position-1) || !Number.isInteger(position) || typeof position !== "number" || position <= 0) {
      throw Error("You can't remove incorrect link!")
    }
    // this.parts.splice(position-1, 1)
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    // for (let item of this.parts) {
    //   if (item === this.parts[0])
    //     this.completeChain += item
    // }
    return this.parts.join("~~")
  }
};

module.exports = {
  chainMaker
};
