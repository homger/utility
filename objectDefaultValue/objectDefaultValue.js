'use strict';

/*



*/
function objectDefaultValue(objectToCheck, defaultObject){
  if(typeof objectToCheck !== "object" || typeof defaultObject !== "object"){
    throw new Error("Invalid arguments");
  }
  let keyArray = Object.keys(defaultObject);
  keyArray.forEach(function(key){
    if(typeof objectToCheck[key] !== typeof defaultObject[key]){
      objectToCheck[key] = defaultObject[key];
    }
  });
}