import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
import { contractions } from "./contractions.js";

let selectedContraction = getRandomProperty(contractions);
let isselectedContraction = true;
let food = getRandomFoodPosition();
const EXPANSION_RATE = 5;

export function updateFood() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);

    food = getRandomFoodPosition();
    selectedContraction = getRandomProperty(contractions);
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

function getRandomSecondWord() {
  const randomProperty = getRandomProperty(contractions);
  const secondWords = contractions[randomProperty].map(
    (words) => words.split(" ")[1]
  );
  const randomIndex = Math.floor(Math.random() * secondWords.length);
  const randomSecondWord = secondWords[randomIndex];

  const element = document.createElement("div");
  element.innerText = randomSecondWord;

  return element;
}

export function drawFood(gameBoard) {
  //food.forEach((position) => {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  foodElement.id = selectedContraction;

  let foodElementText =
    contractions[selectedContraction][
      Math.floor(Math.random() * contractions[selectedContraction].length)
    ];

  foodElementText = foodElementText.split(" ")[0];

  foodElement.innerHTML = foodElementText;
  gameBoard.appendChild(foodElement);
  //});
}

function getRandomFoodPositionFromArray() {
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

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
