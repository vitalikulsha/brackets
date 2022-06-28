module.exports = function check(str, bracketsConfig) {
  const strArray = Array.from(str);
  const closeBrackets = [];
  for(let item of strArray){
    for(let brakets of bracketsConfig){         
      if(item === brakets[0] && !closeBrackets.includes(item)){
        closeBrackets.push(brakets[1]); 
        break;       
      }      
      if(item === brakets[1]){
        if(item === closeBrackets[closeBrackets.length - 1]){
          closeBrackets.pop();
          break;
        } else {
          return false;
        }
      }
    }
  }
  if(closeBrackets.length > 0){
    return false;
  }
  return true;
}
