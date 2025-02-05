function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes");
const input = document.querySelector(".input-number");
const buttonCreate = document.querySelector(".Create");
const buttonDestroy = document.querySelector(".destroy");
buttonCreate.addEventListener("click", () => {
  const amount = Number(input.value.trim());
  if (isNaN(amount) || amount < 1 || amount > 100) {
    return;
  }
  createBoxes(amount);
  input.value = "";
});
buttonDestroy.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  boxes.innerHTML = "";

  const temporary = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const square = document.createElement("div");
    square.style.width = `${30 + i * 10}px`;
    square.style.height = `${30 + i * 10}px`;
    square.style.backgroundColor = getRandomHexColor();
    temporary.appendChild(square);
  }

  boxes.appendChild(temporary);
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
