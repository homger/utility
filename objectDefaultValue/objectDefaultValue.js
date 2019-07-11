'use strict';

/*



*/
function objectDefaultValue(objectToCheck, defaultObject){
  if(typeof defaultObject !== "object"){
    throw new Error("(typeof defaultObject !== 'object') == true");
  }
  let keyArray = Object.keys(defaultObject);
  keyArray.forEach(function(key){
    if(typeof objectToCheck[key] !== typeof defaultObject[key]){
      objectToCheck[key] = defaultObject[key];
    }
  });
}