const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let res = 'FAIL';
  
  switch (date.getMonth()) {
              case 0:
              case 1:
              case 11:
                  res = 'winter';
                  break;
              case 2:
              case 3:
              case 4:
                  res = 'spring';
                  break;
              case 5:
              case 6:
              case 7:
                  res = 'summer';
                  break;
              case 8:
              case 9:
              case 10:
                  res = 'fall';
                  break;
              default:
                  res = 'FAIL';
          }
  return res;
  
    
  
  
  }
