//require("serverScript.js");

function Tumblr(name, num) {
  var a = Math.floor((states % Math.pow(10, num + 1)) / Math.pow(10, num));
  this.activity = +a;
  if ((a = 0)) {
    document.getElementById(name).style.backgroundColor = "red";
    this.color = document.getElementById(name).style.backgroundColor;
  } else if ((a = 1)) {
    document.getElementById(name).style.backgroundColor = "rgb(52, 99, 5)";
    this.color = document.getElementById(name).style.backgroundColor;
  }
}

var states = 10101; // later read this from http!!!
var AIR = new Tumblr("AIR", 3);
var LIGHT = new Tumblr("LIGHT", 2);
var FILTER = new Tumblr("FILTER", 1);
var OTHER = new Tumblr("OTHER", 4);

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
  name.color = document.getElementById(name).style.backgroundColor;
}

function switchActivity(name) {
  if (name.color == "rgb(52, 99, 5)") {
    name.activity = 1;
  } else name.activity = 0;
  return name;
}

function okDealer() {
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
