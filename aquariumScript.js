//require("serverScript.js");

function Tumblr(name, num) {
  var a = Math.floor((states % Math.pow(10, num)) / Math.pow(10, num - 1));
  this.activity = +a;
  if (a == 0) {
    document.getElementById(name).style.backgroundColor = "red";
  } else {
    document.getElementById(name).style.backgroundColor = "rgb(52, 99, 5)";
  }
}


var states = 11000; // later read this from http!!!
var oldStates = states;
var AIR = new Tumblr("AIR", 4);
var LIGHT = new Tumblr("LIGHT", 3);
var FILTER = new Tumblr("FILTER", 2);
var OTHER = new Tumblr("OTHER", 1);

document.getElementById("justP").innerHTML =
  "states = 1" +
  AIR.activity +
  LIGHT.activity +
  FILTER.activity +
  OTHER.activity;

function changeButton(name) {
  if (document.getElementById(name).style.backgroundColor == "rgb(52, 99, 5)") {
    document.getElementById(name).style.backgroundColor = "red";
  } else {
    document.getElementById(name).style.backgroundColor = "rgb(52, 99, 5)";
  }
}

function switchActivity(name) {
  if (name.color == "rgb(52, 99, 5)") {
    name.activity = 1;
  } else name.activity = 0;
  return name;
}

function resetDealer() {
  states = oldStates;
AIR = Tumblr("AIR", 4);
LIGHT = Tumblr("LIGHT", 3);
FILTER = Tumblr("FILTER", 2);
OTHER = Tumblr("OTHER", 1);
  
  AIR.color = document.getElementById("AIR").style.backgroundColor;
  LIGHT.color = document.getElementById("LIGHT").style.backgroundColor;
  FILTER.color = document.getElementById("FILTER").style.backgroundColor;
  OTHER.color = document.getElementById("OTHER").style.backgroundColor;
  AIR = switchActivity(AIR);
  LIGHT = switchActivity(LIGHT);
  FILTER = switchActivity(FILTER);
  OTHER = switchActivity(OTHER);
  
  document.getElementById("justP").innerHTML =
  "states = 1" +
  AIR.activity +
  LIGHT.activity +
  FILTER.activity +
  OTHER.activity;
  }



function okDealer() {
  oldStates = states;
  AIR.color = document.getElementById("AIR").style.backgroundColor;
  LIGHT.color = document.getElementById("LIGHT").style.backgroundColor;
  FILTER.color = document.getElementById("FILTER").style.backgroundColor;
  OTHER.color = document.getElementById("OTHER").style.backgroundColor;
  AIR = switchActivity(AIR);
  LIGHT = switchActivity(LIGHT);
  FILTER = switchActivity(FILTER);
  OTHER = switchActivity(OTHER);
  // send a http (?) signal to arduino
  states =
    10000 +
    1000 * AIR.activity +
    100 * LIGHT.activity +
    10 * FILTER.activity +
    OTHER.activity;
  document.getElementById("justP").innerHTML = "states = " + states;
}
