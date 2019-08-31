'use strict';

function getMaxChild_zIndex(element){
  let cachZindex = 0;
  let zIndex = 0;
  element.childNodes.forEach(child =>{
    if((child instanceof Element)){
      cachZindex = window.getComputedStyle(child).getPropertyValue("z-index");
      console.log(cachZindex);
      if(!isNaN(cachZindex))
      zIndex = cachZindex > zIndex ? cachZindex : zIndex ;
    }
  });
  return zIndex;
}