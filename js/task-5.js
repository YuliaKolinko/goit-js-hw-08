function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const span = document.querySelector(".color");
const title = document.querySelector(".text");
const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  const NewColor = getRandomHexColor();
  document.body.style.backgroundColor = NewColor;
  span.textContent = NewColor;
});
