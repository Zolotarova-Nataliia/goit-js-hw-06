function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxEl = document.querySelector("#boxes");
function createBoxes(amount) {
  let size = 30;
  const divElements = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = size + "px";
    divEl.style.height = size + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    divElements.push(divEl);
    size += 10;
  }

  boxEl.append(...divElements);
}

function destroyBoxes() {
  boxEl.innerHTML = "";
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const numberEl = document.querySelector("input");
btnCreate.addEventListener("click", () => {
  if (numberEl.value === "") {
    return alert("Введите число!");
  }
  createBoxes(Number.parseInt(numberEl.value));
});
btnDestroy.addEventListener("click", destroyBoxes);
