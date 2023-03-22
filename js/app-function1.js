// Add event listeners
document.getElementById("blogButton").addEventListener("click", openBlog);

document.getElementById("calculateTriangleButton").addEventListener("click", function () {
  calculateArea("Triangle", "triangleInput1", "triangleInput2", 0.5, ".bg-rose-200");
});

document.getElementById("calculateRectangleButton").addEventListener("click", function () {
  calculateArea("Rectangle", "rectangleInput1", "rectangleInput2", 1, ".bg-orange-400");
});

document.getElementById("calculateParallelogramButton").addEventListener("click", function () {
  calculateArea("Parallelogram", "parallelogramInput1", "parallelogramInput2", 1, ".bg-yellow-400");
});
document.getElementById("calculateRhombusButton").addEventListener("click", function () {
  calculateArea("Rhombus", "rhombusInput1", "rhombusInput2", 0.5, ".bg-gray-200");
});
document.getElementById("calculatePentagonButton").addEventListener("click", function () {
  calculateArea("Pentagon", "pentagonInput1", "pentagonInput2", 0.5, ".bg-purple-200");
});
document.getElementById("calculateEllipseButton").addEventListener("click", function () {
  calculateArea("Ellipse", "ellipseInput1", "ellipseInput2", 3.14, ".bg-lime-100");
});

// Function to open blog
function openBlog() {
  window.open("../blog.html", "_blank");
}

// Function to calculate area all shape
function calculateArea(shape, input1, input2, initialValue, backgroundColor) {
  const value1 = getInputValue(input1);
  const value2 = getInputValue(input2);

  if (isNaN(value1) || isNaN(value2) || value1 < 0 || value2 < 0) {
    alert(`Please input only positive values for ${shape} dimensions.`);
    return;
  } else {
    const totalArea = calculateInitialValue(initialValue) * value1 * value2;
    displayResult(`${shape}`, value1, value2, `${initialValue}`, totalArea);
    changeBackgroundColor(backgroundColor);
  }

  // Clear the input fields
  document.getElementById(input1).value = "";
  document.getElementById(input2).value = "";
}

// Function to get the input value and convert it to a number
function getInputValue(inputId) {
  const inputString = document.getElementById(inputId).value;
  const inputNumber = parseFloat(inputString);
  return inputNumber;
}

// Function to calculate an initial value
function calculateInitialValue(initialValue) {
  return initialValue;
}

// Function to display the result
function displayResult(shape, value1, value2, initialValue, result) {
  const textArea = document.getElementById("areaCalculation");
  textArea.value = `Shape: ${shape}\nDimensions: ${value1} cm x ${value2} cm\nInitial Value: ${initialValue}\nArea: ${result.toFixed(
    2
  )}\n`;
}

// Function to change the background color of an element
function changeBackgroundColor(className) {
  const element = document.querySelector(className);
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )})`;
  element.style.backgroundColor = randomColor;
}
