import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from "./snake.js";

import { updateFood, drawFood } from "./food.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
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
