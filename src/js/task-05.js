const inputNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");
inputNameEl.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    outputNameEl.textContent = "Anonymous";
  } else {
    outputNameEl.textContent = event.currentTarget.value;
  }
});
