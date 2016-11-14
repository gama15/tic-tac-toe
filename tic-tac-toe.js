// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var firstSquare = "x"
function squareOne() {
  if(firstSquare == "x"){
    var lineOne = document.createElementNS(namespace, "line")
    lineOne.setAttribute("x1", 15)
    lineOne.setAttribute("y1", 15)
    lineOne.setAttribute("x2", 95)
    lineOne.setAttribute("y2", 95)
    lineOne.setAttribute("stroke", "Red")
    lineOne.setAttribute("stroke-width", "8")

    var lineTwo = document.createElementNS(namespace, "line")
    lineTwo.setAttribute("x1", "95")
    lineTwo.setAttribute("y1", "15")
    lineTwo.setAttribute("x2", "15")
    lineTwo.setAttribute("y2", "95")
    lineTwo.setAttribute("stroke", "Red")
    lineTwo.setAttribute("stroke-width", "8")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineOne)
    canvas.appendChild(lineTwo)
  } else {

  }
}
