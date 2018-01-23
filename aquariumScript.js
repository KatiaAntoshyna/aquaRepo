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
  } else document.getElementById("justP").innerHTML = "error!";
}

var states = 10110; // later read this from http!!!
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
  this.color = document.getElementById(name).style.backgroundColor;
}

function switchActivity(name) {
  if (this.color == "rgb(52, 99, 5)") {
    this.activity = 1;
  } else this.activity = 0;
}

function okDealer() {
  switchActivity(AIR);
  switchActivity(LIGHT);
  switchActivity(FILTER);
  switchActivity(OTHER);
  // send a http (?) signal to arduino
  states =
    10000 +
    1000 * AIR.activity +
    100 * LIGHT.activity +
    10 * FILTER.activity +
    OTHER.activity;
  document.getElementById("justP").innerHTML = "states = " + states;
}
