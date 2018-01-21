//require("serverScript.js");

function Tumblr(name, num) {
  var a = Math.floor((states % Math.pow(10, num + 1)) / Math.pow(10, num));
  this.activity = +a;
  this.color = document.getElementById(name).style.backgroundColor;
}

var switchA = new Tumblr("AIR", 4);
var switchL = new Tumblr("LIGHT", 3);
var switchF = new Tumblr("FILTER", 2);
var switchO = new Tumblr("OTHER", 1);
var states = 10101; // later read this from http!!!

document.getElementById("justP").innerHTML =
  "states = 1" +
  switchA.activity +
  switchL.activity +
  switchF.activity +
  switchO.activity;

function changeButton(name) {
  if (document.getElementById(name).style.backgroundColor == "rgb(52, 99, 5)") {
    document.getElementById(name).style.backgroundColor = "red";
  } else document.getElementById(name).style.backgroundColor = "rgb(52, 99, 5)";
}

function switchActivity(name) {
  if (name.color == "rgb(52, 99, 5)") {
    name.activity = 1;
  } else name.activity = 2;
}

function okDealer() {
  switchActivity(switchA);
  switchActivity(switchL);
  switchActivity(switchF);
  switchActivity(switchO);
  // send a http (?) signal to arduino
  states =
    10000 +
    1000 * switchA.activity +
    100 * switchL.activity +
    10 * switchF.activity +
    switchO.activity;
  document.getElementById("justP").innerHTML = "states = " + states;
}
