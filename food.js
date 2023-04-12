import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
import { contractions } from "./contractions.js";

let firstWord = getRandomProperty(contractions);
let isFirstWord = true;
let food = getRandomFoodPosition();
const EXPANSION_RATE = 5;

let foodElementText =
  contractions[firstWord][
    Math.floor(Math.random() * contractions[firstWord].length)
  ];

foodElementText = foodElementText.split(" ")[0];

export function updateFood() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);

    food = getRandomFoodPosition();
  }
}

export function changeFirstWord(word) {
  firstWord = getRandomProperty(contractions);
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
    foodElement.id = firstWord;
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
  if (isFirstWord == true) return newFoodPositionsArray;
  while (onSnake(newFoodPositionsArray) || newFoodPositionsArray.length < 4) {
    newFoodPosition = randomGridPosition();
    newFoodPositionsArray.push(newFoodPosition);
  }
  return newFoodPositionsArray;
  //return newFoodPosition;
}
