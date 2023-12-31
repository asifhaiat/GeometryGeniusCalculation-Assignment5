/* Blog Questions */
document.getElementById("blogButton").addEventListener("click", function () {
  window.open("../blog.html", "_blank");
});

/* Triangle Calculate */
document.getElementById("calculateTriangleButton").addEventListener("click", function () {
  //   console.log("Triangle Button Clicked");
  const triangleBaseString = document.getElementById("triangleInput1");
  //   console.log(triangleBaseString);
  const triangleBaseNumber = parseFloat(triangleBaseString.value);
  //   console.log(triangleBaseNumber);
  const triangleHeightString = document.getElementById("triangleInput2");
  //   console.log(triangleHeightString);
  const triangleHeightNumber = parseFloat(triangleHeightString.value);
  // console.log(triangleHeightNumber);

  // Clear the input fields
  triangleBaseString.value = "";
  triangleHeightString.value = "";

  if (isNaN(triangleBaseNumber) || isNaN(triangleHeightNumber) || triangleBaseNumber < 0 || triangleHeightNumber < 0) {
    alert("Please input only positive values for triangle base and height.");
    return;
  } else {
    const initialTriangleValue = 0.5;
    const totalTriangleArea = (initialTriangleValue * triangleBaseNumber * triangleHeightNumber).toFixed(2);
    //   console.log(totalTriangleArea);

    /* Set Total Value in textarea field */
    const textAreaTriangleString = document.getElementById("areaCalculation");
    textAreaTriangleString.value = totalTriangleArea;

    // Get the element whose background color I want to change
    const triangleBackgroundColor = document.querySelector(".bg-rose-200");

    // Generate a random color value using the Math.random() function
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;

    // Set the background color of the element to the random color value
    triangleBackgroundColor.style.backgroundColor = randomColor;
  }
});

/* Rectangle Calculate */
document.getElementById("calculateRectangleButton").addEventListener("click", function () {
  //   console.log("Rectangle Button Clicked");
  const rectangleWidthString = document.getElementById("rectangleInput1");
  //   console.log(rectangleWidthString);
  const rectangleWidthNumber = parseFloat(rectangleWidthString.value);
  //   console.log(rectangleWidthNumber);
  const rectangleLengthString = document.getElementById("rectangleInput2");
  //   console.log(rectangleLengthString);
  const rectangleLengthNumber = parseFloat(rectangleLengthString.value);
  //   console.log(rectangleLengthNumber);

  // Clear the input fields
  rectangleWidthString.value = "";
  rectangleLengthString.value = "";

  if (
    isNaN(rectangleWidthNumber) ||
    isNaN(rectangleLengthNumber) ||
    rectangleWidthNumber < 0 ||
    rectangleLengthNumber < 0
  ) {
    alert("Please input only positive values for Rectangle width and length.");
    return;
  } else {
    const totalRectangleArea = (rectangleWidthNumber * rectangleLengthNumber).toFixed(2);
    //   console.log(totalRectangleArea);

    /* Set Total Value in textarea field */
    const textAreaRectangleString = document.getElementById("areaCalculation");
    textAreaRectangleString.value = totalRectangleArea;

    // Get the element whose background color I want to change
    const rectangleBackgroundColor = document.querySelector(".bg-orange-400");
    // Generate a random color value using the Math.random() function
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
    // Set the background color of the element to the random color value
    rectangleBackgroundColor.style.backgroundColor = randomColor;
  }
});

/* Parallelogram Calculate */
document.getElementById("calculateParallelogramButton").addEventListener("click", function () {
  //   console.log("Parallelogram Button Clicked");
  const parallelogramBaseString = document.getElementById("parallelogramInput1");
  // console.log(parallelogramBaseString);
  const parallelogramBaseNumber = parseFloat(parallelogramBaseString.value);
  // console.log(parallelogramBaseNumber);
  const parallelogramHeightString = document.getElementById("parallelogramInput2");
  // console.log(parallelogramHeightString);
  const parallelogramHeightNumber = parseFloat(parallelogramHeightString.value);
  //   console.log(parallelogramHeightNumber);

  // Clear the input fields
  parallelogramBaseString.value = "";
  parallelogramHeightString.value = "";

  if (
    isNaN(parallelogramBaseNumber) ||
    isNaN(parallelogramHeightNumber) ||
    parallelogramBaseNumber < 0 ||
    parallelogramHeightNumber < 0
  ) {
    alert("Please input only positive values for Parallelogram base and height.");
    return;
  } else {
    const totalParallelogramArea = (parallelogramBaseNumber * parallelogramHeightNumber).toFixed(2);
    //   console.log(totalParallelogramArea);

    /* Set Total Value in textarea field */
    const textAreaParallelogramString = document.getElementById("areaCalculation");
    textAreaParallelogramString.value = totalParallelogramArea;

    // Get the element whose background color I want to change
    const parallelogramBackgroundColor = document.querySelector(".bg-yellow-400");

    // Generate a random color value using the Math.random() function
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;

    // Set the background color of the element to the random color value
    parallelogramBackgroundColor.style.backgroundColor = randomColor;
  }
});

/* Rhombus Calculate */
document.getElementById("calculateRhombusButton").addEventListener("click", function () {
  //   console.log("Parallelogram Button Clicked");
  const rhombusBaseString = document.getElementById("rhombusInput1");
  // console.log(parallelogramBaseString);
  const rhombusBaseNumber = parseFloat(rhombusBaseString.value);
  // console.log(parallelogramBaseNumber);
  const rhombusHeightString = document.getElementById("rhombusInput2");
  // console.log(parallelogramHeightString);
  const rhombusHeightNumber = parseFloat(rhombusHeightString.value);
  //   console.log(parallelogramHeightNumber);

  // Clear the input fields
  rhombusBaseString.value = "";
  rhombusHeightString.value = "";

  if (isNaN(rhombusBaseNumber) || isNaN(rhombusHeightNumber) || rhombusBaseNumber < 0 || rhombusHeightNumber < 0) {
    alert("Please input only positive values for Rhombus base and height.");
    return;
  } else {
    const initialRhombusValue = 0.5;
    const totalRhombusArea = (initialRhombusValue * rhombusBaseNumber * rhombusHeightNumber).toFixed(2);
    // console.log(totalRhombusArea);

    /* Set Total Value in textarea field */
    const textAreaRhombusString = document.getElementById("areaCalculation");
    textAreaRhombusString.value = totalRhombusArea;

    // Get the element whose background color I want to change
    const rhombusBackgroundColor = document.querySelector(".bg-gray-200");

    // Generate a random color value using the Math.random() function
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;

    // Set the background color of the element to the random color value
    rhombusBackgroundColor.style.backgroundColor = randomColor;
  }
});

/* Pentagon Calculate */
document.getElementById("calculatePentagonButton").addEventListener("click", function () {
  //   console.log("Parallelogram Button Clicked");
  const pentagonBaseString = document.getElementById("pentagonInput1");
  // console.log(parallelogramBaseString);
  const pentagonBaseNumber = parseFloat(pentagonBaseString.value);
  // console.log(parallelogramBaseNumber);
  const pentagonHeightString = document.getElementById("pentagonInput2");
  // console.log(parallelogramHeightString);
  const pentagonHeightNumber = parseFloat(pentagonHeightString.value);
  //   console.log(parallelogramHeightNumber);

  //   Clear The Input Field
  pentagonBaseString.value = "";
  pentagonHeightString.value = "";

  if (isNaN(pentagonBaseNumber) || isNaN(pentagonHeightNumber) || pentagonBaseNumber < 0 || pentagonHeightNumber < 0) {
    alert("Please input only positive values for Pentagon base and height.");
    return;
  } else {
    const initialPentagonValue = 0.5;
    const totalPentagonArea = (initialPentagonValue * pentagonBaseNumber * pentagonHeightNumber).toFixed(2);
    //   console.log(totalPentagonArea);

    /* Set Total Calculated Value in textarea */
    const pentagonTextAreaString = document.getElementById("areaCalculation");
    pentagonTextAreaString.value = totalPentagonArea;

    // Get the element whose background color I want to change
    const pentagonBackgroundColor = document.querySelector(".bg-purple-200");

    // Generate a random color value using the Math.random() function
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;

    // Set the background color of the element to the random color value
    pentagonBackgroundColor.style.backgroundColor = randomColor;
  }
});

/* Ellipse Calculate */
document.getElementById("calculateEllipseButton").addEventListener("click", function () {
  //   console.log("Parallelogram Button Clicked");
  const ellipseAAxisString = document.getElementById("ellipseInput1");
  // console.log(parallelogramBaseString);
  const ellipseAAxisNumber = parseFloat(ellipseAAxisString.value);
  // console.log(parallelogramBaseNumber);
  const ellipseBAxisString = document.getElementById("ellipseInput2");
  // console.log(parallelogramHeightString);
  const ellipseBAxisNumber = parseFloat(ellipseBAxisString.value);
  //   console.log(parallelogramHeightNumber);

  //   Clear The Input Field
  ellipseAAxisString.value = "";
  ellipseBAxisString.value = "";

  if (isNaN(ellipseAAxisNumber) || isNaN(ellipseBAxisNumber) || ellipseAAxisNumber < 0 || ellipseBAxisNumber < 0) {
    alert("Please input only positive values for Ellipse A axis and B axis.");
    return;
  } else {
    const initialEllipseValue = 3.14;
    const totalEllipseArea = (initialEllipseValue * ellipseAAxisNumber * ellipseBAxisNumber).toFixed(2);
    //   console.log(totalEllipseArea);

    /* Set Total Calculated Value in textarea */
    const ellipseTextAreaString = document.getElementById("areaCalculation");
    ellipseTextAreaString.value = totalEllipseArea;

    // Get the element whose background color I want to change
    const ellipseBackgroundColor = document.querySelector(".bg-lime-100");

    // Generate a random color value using the Math.random() function
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;

    // Set the background color of the element to the random color value
    ellipseBackgroundColor.style.backgroundColor = randomColor;
  }
});
