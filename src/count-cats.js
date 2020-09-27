const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix /* matrix */) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let cats = 0;
  for (let i = 0; i < matrix.length; i++){
    for (let k = 0; k < matrix[i].length; k++){
      if (matrix[i][k] == '^^'){
        cats++;
      }
    }
  }
  return cats;
};
