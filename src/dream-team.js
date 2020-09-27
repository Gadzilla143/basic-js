const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members/* members */) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let mem = [];
  let str = "";
  if (members != null){
    for(let i = 0; i < members.length; i++){
      if (typeof members[i] === "string") {
      mem.push(members[i].replace(/\s+/g, '').toUpperCase())
      }
    }
  } else {
    return false;
  }
  mem = mem.sort();
  for (let i = 0; i < mem.length; i++){
    str += mem[i][0]
  }
  return str;
};
