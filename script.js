// User Input - Mother Function
function calVol() {
  let r = document.getElementById("radius").value;
  valTextOrNum(r);
  if (valCircleInCanvas(r)) {
    r = "";
  }
  printResult(r);
  drawCircle(r);
}
// Calculating Volume
function printResult(radius) {
  radius = Math.abs(radius);
  let printResult = document.getElementById("mySpan");
  let result = (4 * Math.PI * Math.pow(radius, 3)) / 3;
  printResult.innerText = result;
}
// Validation Functions
function valTextOrNum(radius) {
  if (isNaN(radius)) {
    alert("Your Radius is not a Number!");
  }
}

function valCircleInCanvas(radius) {
  let y = document.getElementById("drawCircle").height;
  if (radius > (y / 2) - 1) {
    alert("Too Big");
    return true;
  }
  return false;
}
// Drawing Circle
function drawCircle(radius) {
  radius = Math.abs(radius);
  const canvas = document.getElementById("drawCircle");
  const draw = canvas.getContext("2d");
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  draw.beginPath();
  draw.arc(x, y, radius, 0, 2 * Math.PI);
  draw.stroke();
}
// Clear Canvas
function cleanCanvas() {
  const canvas = document.getElementById("drawCircle");
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}
// On Load
function fillCanvas() {
  let y = document.getElementById("drawCircle").height;
  let i = 0;
  setInterval(function () {
    if (i < (y / 2)) {
      drawCircle(i);
      i++;
    }
  }, 100);
}