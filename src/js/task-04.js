let counterValue = 0;
const decrementBtnEl = document.querySelector(`[data-action="decrement"]`);
const incrementBtnEl = document.querySelector(`[data-action="increment"]`);
const spanValueEl = document.querySelector("#value");
incrementBtnEl.addEventListener("click", () => {
  counterValue += 1;
  spanValueEl.textContent = counterValue;
});
decrementBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  spanValueEl.textContent = counterValue;
});
spanValueEl.textContent = counterValue;
