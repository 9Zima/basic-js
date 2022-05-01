const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr))  throw new Error("'arr' parameter must be an instance of the Array!");
  let newArr = [],
      innerCommands = [
        "--discard-next",
        "--discard-prev",
        "--double-next",
        "--double-prev",
      ];
  for (let i = 0; i < arr.length; i++) {
    if (!innerCommands.includes(arr[i]))  newArr.push(arr[i]);
    if (innerCommands[0] === arr[i])  i++;
    if (innerCommands[1] === arr[i] && newArr.length !== 0)  newArr.pop();
    if (innerCommands[2] === arr[i])  arr[i+1] === undefined ?  newArr : newArr.push(arr[i+1]);
    if (innerCommands[3] === arr[i] && newArr.length !== 0)  newArr.push(newArr[i-1]);
  }
  for (let i = 0; i < newArr.length; i++) {
    let bubble;
    if (newArr[i] === undefined && newArr[i+1] !== undefined) {
      bubble = newArr[i];
      newArr[i] = newArr[i+1];
      newArr[i+1] = bubble;

    }
  }
  if (newArr[newArr.length - 1] === undefined)
    newArr.pop()
  // for (let i = 0; i < newArr.length; i++){ if (newArr[i] === undefined) {newArr.splice(i, 1); i--}}
  
  // for (let i = 0; i < arr.length; i++) {
  //   if (innerCommands[0] === arr[i] && arr[i+1] !== undefined && typeof arr[i+1] !== "string"){
  //     newArr.splice(i+1, 1);
  //     i--;
  //     continue
  //   }
  //   if (innerCommands[1] === arr[i] && arr[i-1] !== undefined && typeof arr[i-1] !== "string"){
  //     newArr.splice(i-1, 1);
  //     i--;
  //     continue
  //   }
  //   if (innerCommands[2] === arr[i] && arr[i+1] !== undefined && typeof arr[i+1] !== "string"){
  //     newArr.splice(i, 0, arr[i+1]);
  //     i++;
  //     continue
  //   }
  //   if (innerCommands[3] === arr[i] && arr[i-1] !== undefined && typeof arr[i-1] !== "string"){
  //     newArr.splice(i-1, 0, arr[i-1]);
  //     i++;
  //     continue
  //   }
  // }
  // for (let i = 0; i < newArr.length; i++){ if (innerCommands.includes(newArr[i])) {newArr.splice(i, 1); i--}}
  
  return newArr
}

module.exports = {
  transform
};
