module.exports = function check(str, bracketsConfig) {
  const arr = Array.from(str);
  const closeBrackets = [];
  for(let i = 0; i < arr.length; i++){
    for(let k = 0; k < bracketsConfig.length; k++){         
      if(arr[i] === bracketsConfig[k][0] && !closeBrackets.includes(arr[i])){
        closeBrackets.push(bracketsConfig[k][1]); 
        break;       
      }      
      if(arr[i] === bracketsConfig[k][1]){
        if(arr[i] === closeBrackets[closeBrackets.length - 1]){
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
