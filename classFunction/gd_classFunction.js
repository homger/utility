//FOR IE

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