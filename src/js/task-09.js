function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.body;
const colorEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorEl.textContent = color;
});
