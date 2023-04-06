"use strict"

var available_colors = [
    "red",
    "yellow",
    "green",
    "blue",
    "magenta",
    "brown",
    "black",
    "cyan",
    "pink",
    "purple",
    "orange"
  ];

  var available_shapes = [
    "square",
    "rectangle",
    "triangle",
    "circle"
  ];

  document.getElementsByClassName("btn1")[0].addEventListener("click",function(){
    var nextColor = available_colors[Math.floor(Math.random()*11)];
    document.getElementsByClassName("inner")[0].style.backgroundColor = nextColor;
  });

  document.getElementsByClassName("btn2")[0].addEventListener("click", function(){
    var nextShape = available_shapes[Math.floor(Math.random()*4)];
    document.getElementById("shaper").setAttribute("class",nextShape);
  })