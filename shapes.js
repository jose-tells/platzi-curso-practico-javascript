const geometricShapes = [
  {
    squareSide: document.getElementById("square"),
    squareArea: document.getElementById("squareArea"),
    squarePerimeter: document.getElementById("squarePerimeter")
  },
  {
    triangleBase: document.getElementById("base"),
    triangleHeight: document.getElementById("height"),
    triangleArea: document.getElementById("triangleArea"),
    trianglePerimeter: document.getElementById("trianglePerimeter")
  },
  {
    circleRadio: document.getElementById("circle"),
    circleArea: document.getElementById("circleArea"),
    circlePerimeter: document.getElementById("circlePerimeter")
  },
  {
    isoscelesFirstSide: document.getElementById("isoscelesFirstSide"),
    isoscelesSecondSide: document.getElementById("isoscelesSecondSide"),
    isoscelesBase: document.getElementById("isoscelesBase"),
    isoscelesHeight: document.getElementById("isoscelesHeight")
  }
]

geometricShapes[0].squareSide.addEventListener("input", () => {
  square(geometricShapes[0].squareSide.value);
});

let inputValidation = geometricShapes[1].triangleBase !== null && geometricShapes[1].triangleHeight !== null;

if (inputValidation){
  geometricShapes[1].triangleHeight.addEventListener("input", () => {
    triangle(geometricShapes[1].triangleBase.value, geometricShapes[1].triangleHeight.value);
  });
}

geometricShapes[2].circleRadio.addEventListener("input", () => {
  circle(geometricShapes[2].circleRadio.value);
});

function square(side) {
  let area = side ** 2;
  let perimeter = side * 4
  geometricShapes[0].squareArea.innerHTML = area;
  geometricShapes[0].squarePerimeter.innerHTML = perimeter;
};

function triangle(base, height){
  let area = (base * height) / 2;
  geometricShapes[1].triangleArea.innerHTML = area;
};

function circle(radio){
  let area = Math.PI * (radio ** 2);
  let perimeter = 2 * Math.PI * radio 
  geometricShapes[2].circleArea.innerHTML = area.toFixed(2)
  geometricShapes[2].circlePerimeter.innerHTML = perimeter.toFixed(2);
};

// Isosceles challenge

function isosceles(firstSide, secondSide, base) {
  if (firstSide === secondSide && base !== firstSide){
    let height = Math.sqrt((firstSide ** 2) - ((base / 2) ** 2));
    geometricShapes[3].isoscelesHeight.innerHTML = `The height of your beautiful isosceles triangle is: ${height.toFixed(2)}`;
  }else {
    geometricShapes[3].isoscelesHeight.innerHTML = "Your triangle isn't an isosceles!";
  }
};

const btnIsosceles = document.getElementById("isoscelesBtn")
btnIsosceles.addEventListener("click", () => {
    isosceles(geometricShapes[3].isoscelesFirstSide.value, geometricShapes[3].isoscelesSecondSide.value, geometricShapes[3].isoscelesBase.value)
});