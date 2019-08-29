//FOR IE

function hasClass(element, _class){

  if(element.className === _class)
    return 0;
  
  let index = element.className.indexOf(" " +_class + " ");
  if(index != -1)
    return index;
  
  index = element.className.indexOf(_class + " ");
  if(index != -1)
    return index;
  
  index = element.className.indexOf(" " + _class);
  if(index != -1)
    return index;
    
    
  return -1;
}

function removeClass(element, _class){
  let index = hasClass(element, _class);

  if(index > -1){
    let classArray = element.className.split("");
    classArray.splice(index, _class.length);
    element.className = classArray.join("");
    return;
  }
}
function addClass(element, _class){
  let index = hasClass(element, _class);
  if(index == -1){
    element.className = element.className + " " + _class;
  }
}
function toggleClass(element, _class){
  let index = hasClass(element, _class);
  if(index > -1){
    let classArray = element.className.split("");
    classArray.splice(index, _class.length);
    element.className = classArray.join("");
    return;
  }
  element.className = element.className + " " + _class;
}
