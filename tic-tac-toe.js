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

    var circleThree = document.createElementNS(namespace, "circle")
    circleThree.setAttribute("cx", "55")
    circleThree.setAttribute("cy", "55")
    circleThree.setAttribute("r", "45")
    circleThree.setAttribute("fill", "white")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleThree)
    canvas.appendChild(lineOne)
    canvas.appendChild(lineTwo)

    firstSquare = "o"

  } else {
    var backgroundOne = document.createElementNS(namespace, "line")
    backgroundOne.setAttribute("x1", "95")
    backgroundOne.setAttribute("y1", "15")
    backgroundOne.setAttribute("x2", "15")
    backgroundOne.setAttribute("y2", "95")
    backgroundOne.setAttribute("stroke", "white")
    backgroundOne.setAttribute("stroke-width", "8")

    var backgroundTwo = document.createElementNS(namespace, "line")
    backgroundTwo.setAttribute("x1", "15")
    backgroundTwo.setAttribute("y1", "15")
    backgroundTwo.setAttribute("x2", "95")
    backgroundTwo.setAttribute("y2", "95")
    backgroundTwo.setAttribute("stroke", "white")
    backgroundTwo.setAttribute("stroke-width", "8")

    var circleOne = document.createElementNS(namespace, "circle")
    circleOne.setAttribute("cx", "55")
    circleOne.setAttribute("cy", "55")
    circleOne.setAttribute("r", "45")
    circleOne.setAttribute("fill", "Red")

    var circleTwo = document.createElementNS(namespace, "circle")
    circleTwo.setAttribute("cx", "55")
    circleTwo.setAttribute("cy", "55")
    circleTwo.setAttribute("r", "35")
    circleTwo.setAttribute("fill", "white")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(backgroundOne)
    canvas.appendChild(backgroundTwo)
    canvas.appendChild(circleOne)
    canvas.appendChild(circleTwo)
    firstSquare = "x"
  }
}

var secondSquare = "O"
function squareTwo() {
  if(secondSquare == "O"){
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", "155")
    circle.setAttribute("cy", "155")
    circle.setAttribute("r", "45")
    circle.setAttribute("fill", "red")

    var circleThree = document.createElementNS(namespace, "circle")
    circleThree.setAttribute("cx", "55")
    circleThree.setAttribute("cy", "55")
    circleThree.setAttribute("r", "35")
    circleThree.setAttribute("fill", "red")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
    canvas.appendChild(circleThree)
    secondSquare = "O"
  }
}

var thirdSquare = "x"
function squareThree() {
  if(thirdSquare == "x"){
    var lineThree = document.createElementNS(namespace, "line")
    lineThree.setAttribute("x1", 15)
    lineThree.setAttribute("y1", 15)
    lineThree.setAttribute("x2", 95)
    lineThree.setAttribute("y2", 95)
    lineThree.setAttribute("stroke", "Red")
    lineThree.setAttribute("stroke-width", "8")

    var lineFour = document.createElementNS(namespace, "line")
    lineFour.setAttribute("x1", "95")
    lineFour.setAttribute("y1", "15")
    lineFour.setAttribute("x2", "15")
    lineFour.setAttribute("y2", "95")
    lineFour.setAttribute("stroke", "Red")
    lineFour.setAttribute("stroke-width", "8")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineThree)
    canvas.appendChild(lineFour)

    thirdSquare = "X"
  }
}
