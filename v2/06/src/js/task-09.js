function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const colorChangeBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
colorChangeBtn.addEventListener("click", changeColor);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  document.querySelector(".color").textContent = body.style.backgroundColor;
}