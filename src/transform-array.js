const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let mass = [];
  let k = 0;
  for(let i = 0; i < arr.length; i++){
    switch(arr[i]) {
  case '--double-next':
    mass[k] = arr[i + 1];
    k++;

    break;
  case '--double-prev':
    if(arr[i-1] != null){
    mass[k] = arr[i - 1];
    k++;
    }
    break;
  case '--discard-next':
    arr[i+1] = null;
    i++;

    break;
  case '--discard-prev':
    if (arr[i-1] != null){
    k--;
    }
    

    break;
  
  default:
    mass[k] = arr[i];
    k++;
}
}
  arr = mass;
  return mass;
};
