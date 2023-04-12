import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
import { contractions } from "./contractions.js";

let selectedContraction = getRandomProperty(contractions);
let isselectedContraction = true;
let food = getRandomFoodPosition();
const EXPANSION_RATE = 5;

let foodElementText =
  contractions[selectedContraction][
    Math.floor(Math.random() * contractions[selectedContraction].length)
  ];

foodElementText = foodElementText.split(" ")[0];

export function updateFood() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);

    food = getRandomFoodPosition();
  }
}

export function changeSelectedContraction(word) {
  selectedContraction = getRandomProperty(contractions);
}

// Utility function to get a random property from an object
function getRandomProperty(obj) {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}

export function drawFood(gameBoard) {
  food.forEach((position) => {
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = position.y;
    foodElement.style.gridColumnStart = position.x;
    foodElement.classList.add("food");
    foodElement.id = selectedContraction;
    foodElement.innerHTML = foodElementText;
    gameBoard.appendChild(foodElement);
  });
}

function getRandomFoodPosition() {
  let newFoodPosition;
  let newFoodPositionsArray = [];
  while (newFoodPosition == null || onSnake(newFoodPositionsArray)) {
    newFoodPosition = randomGridPosition();
    newFoodPositionsArray.push(newFoodPosition);
  }
  if (isselectedContraction == true) return newFoodPositionsArray;
  while (onSnake(newFoodPositionsArray) || newFoodPositionsArray.length < 4) {
    newFoodPosition = randomGridPosition();
    newFoodPositionsArray.push(newFoodPosition);
  }
  return newFoodPositionsArray;
  //return newFoodPosition;
}
