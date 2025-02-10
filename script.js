function addNumbers(num1, num2) {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var sum = num1 + num2;

  document.getElementById("result").innerHTML = "The sum of " + num1 + " and " + num2 + "   is " + sum + ".";
}

function differenceNumbers(num1, num2) {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var difference = num1 - num2;

  document.getElementById("result").innerHTML = "The difference of " + num1 + " and " + num2 + "   is " + difference + ".";
}

function multiplyNumbers(num1, num2) {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var product = num1 * num2;

  document.getElementById("result").innerHTML = "The product of " + num1 + " and " + num2 + "   is " + product + ".";
}

function divideNumbers(num1, num2) {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var quotient = num1 / num2;

  document.getElementById("result").innerHTML = "The quotient of " + num1 + " and " + num2 + "   is " + quotient + ".";
}

function remainderNumbers(num1, num2) {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var remainder = num1 % num2;

  document.getElementById("result").innerHTML = "The remainder of " + num1 + " and " + num2 + "   is " + remainder + ".";
}
