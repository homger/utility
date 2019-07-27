'use strict';


var SCRIPT_LIST = [];
const DEFAULT_PARAMERTERS_VALUE = {src: "",  loadFunction: undefined, reference_sibling: document.querySelector("script"), append: false, msg: "_"};

function loadScript(parameters = {src: "",  loadFunction: undefined, reference_sibling: document.querySelector("script"), append: false, msg: "_"}){
  if( (typeof parameters === "string") ){
    parameters = {src : parameters};
  }
  parameters = objectDefaultValue(parameters, DEFAULT_PARAMERTERS_VALUE);

  if(parameters.msg === "/****/ script has been loaded /****/"){
    SCRIPT_LIST.shift();
    if(SCRIPT_LIST.length > 0){
      launchLoad(SCRIPT_LIST[0]);
    }
    return;
  }
  
  console.log(parameters.msg);

  let script = document.createElement("script");
  script.src = parameters.src;
  script.addEventListener("load", function(){
    loadScript({msg:"/****/ script has been loaded /****/"});
    console.log("script :  " + this.src + "  load done");
    if(this.__hasLoadFunction){
      this.__loadFunction();
      this.__hasLoadFunction = undefined;
      this.__loadFunction = undefined;
    }
  });


  let parameter_object = {};
  parameter_object.script = script;
  parameter_object.reference_sibling = parameters.reference_sibling;
  parameter_object.append = parameters.append;

  script.__hasLoadFunction = false;

  if(parameters.loadFunction !== undefined ){
    script.__hasLoadFunction = true;
    script.__loadFunction = parameters.loadFunction;
  }

  SCRIPT_LIST.push(
    parameter_object
  );

  if(SCRIPT_LIST.length == 1){
    launchLoad(SCRIPT_LIST[0]);
  }
}

function launchLoad(parameter_object){
  if(parameter_object.append){
    parameter_object.reference_sibling.parentNode.append(parameter_object.script);
    return;
  }
  parameter_object.reference_sibling.parentNode.insertBefore(parameter_object.script,
    parameter_object.reference_sibling);
}

/*
use Object.freeze on defaultObject
*/
function objectDefaultValue(objectToCheck, defaultObject){
  if(typeof defaultObject !== "object"){
    throw new Error("Invalid defaultObject argument");
  }
  if(typeof objectToCheck !== "object"){
    console.warn("argument objectToCheck is not an object. defaultObject wil be copied");
    objectToCheck = {};
  }
  
  let keyArray = Object.keys(defaultObject);
  keyArray.forEach(function(key){
    if(typeof objectToCheck[key] !== typeof defaultObject[key]){
      objectToCheck[key] = defaultObject[key];
    }
  });
  return objectToCheck;
}