//FOR IE

function hasClass(element, _class){
  let index = element.className.indexOf(_class);

  if(index > -1){
    
    return checkBorder(element.className, index, _class.length);
  }
  return false;
}

function removeClass(element, _class){
  let index = element.className.indexOf(_class);

  if(index > -1){
    let classArray = element.className.split("");
    classArray.splice(index, _class.length);
    element.className = classArray.join("");
    return;
  }
}
function addClass(element, _class){
  let index = element.className.indexOf(_class);
  if(index == -1){
    element.className = element.className + " " + _class;
  }
}
function toggleClass(element, _class){
  let index = element.className.indexOf(_class);
  if(index > -1){
    let classArray = element.className.split("");
    classArray.splice(index, _class.length);
    element.className = classArray.join("");
    return;
  }
  element.className = element.className + " " + _class;
}

function checkBorder(string, index, length){
  let m_length = length - 1;
  if(index > 0 && string[index - 1] !== " ")
    return false;
  if(string.length > index + length && string[index + length] !== " ")
    return false;
  return true;
}