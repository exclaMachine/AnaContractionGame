import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  snakeIntersection,
  getSnakeHead,
} from "./snake.js";

import { updateFood, drawFood } from "./food.js";

import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");
let gameOver = false;

function main(currentTime) {
  checkDeath();
  if (gameOver) {
    return alert("You lose");
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

export function update() {
  updateSnake();
  updateFood();
}

export function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
