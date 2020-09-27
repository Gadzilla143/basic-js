const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // remove line with error and write your code here
    let maxDepth = 0;
    
    const a = (item, counter) => {
    item.forEach((el) => {
    if (Array.isArray(el)) {
    counter += 1;
    if (counter > maxDepth) maxDepth = counter;
    a(el, counter);
    }
    });
    if (counter > maxDepth) maxDepth = counter;
    }
    
    if (Array.isArray(arr)) {
    a(arr, 1);
    }
    return maxDepth;
  }
};