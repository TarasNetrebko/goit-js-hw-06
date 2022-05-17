function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const container = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
let previousBoxesCount = 0;

// Тут я не допер як передаті число в колбек функцію для створення коробок, тому витягнув його з події
function createBoxes(event) {
  for (let i = 1; i <= (event.target.previousElementSibling.value); i += 1) {
    const div = document.createElement("div");
    div.style.width = `${20 + (i * 10) + previousBoxesCount*10}px`;
    div.style.height = `${20 + (i * 10) + previousBoxesCount*10}px`;
    div.style.backgroundColor = getRandomHexColor();
    container.append(div);
  }
  previousBoxesCount += Number(event.target.previousElementSibling.value);
}
function destroyBoxes() {
  [...container.children].forEach(el => { el.remove(); }); 
  previousBoxesCount = 0;
}