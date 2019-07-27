'use strict';


var SCRIPT_LIST = [];
function loadScript(parameters = {src: "",  loadFunction: undefined, reference_sibling: document.querySelector("script"), append: false, msg: "_"}){

  if(parameters.msg === "/****/ script has been loaded /****/"){
    SCRIPT_LIST.shift();
    if(SCRIPT_LIST.length > 0){
      launchLoad(SCRIPT_LIST[0]);
    }
    return;
  }
  checkParamaters(parameters);
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

function checkParamaters(parameters){
  if(isUndefined(parameters.src))
  parameters.src = "";
  if(isUndefined(parameters.reference_sibling))
  parameters.reference_sibling = document.querySelector("script");
  if(isUndefined(parameters.append))
  parameters.append = false;
}

function isUndefined(_var){
if(_var === undefined)
  return true;
return false;
}