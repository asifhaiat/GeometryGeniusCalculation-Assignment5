// Define reusable function to calculate the area of a shape
function calculateArea(shape, input1, input2) {
  const value1 = parseFloat(input1.value);
  const value2 = parseFloat(input2.value);

  // Clear the input fields
  input1.value = "";
  input2.value = "";
  let area;
  if (isNaN(value1) || isNaN(value2) || value1 < 0 || value2 < 0) {
    alert(
      `Please input only positive values for ${shape} ${input1.id.split("Input")[0]} and ${
        input2.id.split("Input")[0]
      }.`
    );
    return;
  } else {
    // Calculate the area of the shape
    switch (shape) {
      case "Triangle":
        area = 0.5 * value1 * value2;
        document.querySelector(".bg-rose-200").style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        break;
      case "Rectangle":
        area = value1 * value2;
        document.querySelector(".bg-orange-400").style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        break;
      case "Parallelogram":
        area = value1 * value2;
        document.querySelector(".bg-yellow-400").style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        break;
      case "Rhombus":
        area = 0.5 * value1 * value2;
        document.querySelector(".bg-gray-200").style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        break;
      case "Pentagon":
        area = 0.5 * value1 * value2;
        document.querySelector(".bg-purple-200").style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        break;
      case "Ellipse":
        area = 3.14 * value1 * value2;
        document.querySelector(".bg-lime-100").style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        break;
      default:
        console.error(`Invalid shape: ${shape}`);
        return;
    }
  }

  // Set the area value in the text area
  document.getElementById("areaCalculation").value = area.toFixed(2);
}

// Add event listeners to the buttons
document.getElementById("blogButton").addEventListener("click", () => {
  window.open("../blog.html", "_blank");
});

document.getElementById("calculateTriangleButton").addEventListener("click", () => {
  calculateArea("Triangle", document.getElementById("triangleInput1"), document.getElementById("triangleInput2"));
});
document.getElementById("calculateRectangleButton").addEventListener("click", () => {
  calculateArea("Rectangle", document.getElementById("rectangleInput1"), document.getElementById("rectangleInput2"));
});
document.getElementById("calculateParallelogramButton").addEventListener("click", () => {
  calculateArea(
    "Parallelogram",
    document.getElementById("parallelogramInput1"),
    document.getElementById("parallelogramInput2")
  );
});

document.getElementById("calculateRhombusButton").addEventListener("click", () => {
  calculateArea("Rhombus", document.getElementById("rhombusInput1"), document.getElementById("rhombusInput2"));
});
document.getElementById("calculatePentagonButton").addEventListener("click", () => {
  calculateArea("Pentagon", document.getElementById("pentagonInput1"), document.getElementById("pentagonInput2"));
});
document.getElementById("calculateEllipseButton").addEventListener("click", () => {
  calculateArea("Ellipse", document.getElementById("ellipseInput1"), document.getElementById("ellipseInput2"));
});
