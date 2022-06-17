var block = document.getElementById("test");
var dotElement = document.getElementById("dot");

// Change background color of Object

dotElement.onmouseenter = function () {
  console.log("In!");
  this.style.background = "gold";
};

dotElement.onmouseleave = function () {
  this.style.background = "orange";
};

// Almost touched

block.onmouseenter = function () {
  console.log("Almost toched the dot!");
};

// Move Object
var leftRange = 0;
var topRange = 0;
var rightRange = 0;

document.onkeydown = function (event) {
  console.log(event);
  if (event.key === "ArrowRight") {
    block.style.left = leftRange + "rem";
    leftRange++;
  }
  if (event.key === "ArrowLeft") {
    block.style.left = leftRange + "rem";
    leftRange--;
  }
  if (event.key === "ArrowDown") {
    block.style.top = topRange + "rem";
    topRange++;
  }

  if (event.key === "ArrowUp") {
    block.style.top = topRange + "rem";
    topRange--;
  }
};
