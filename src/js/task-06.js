const textInputEl = document.querySelector("#validation-input");
const dataLengthEl = textInputEl.getAttribute("data-length");
textInputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number.parseInt(dataLengthEl)) {
    textInputEl.classList.remove("invalid");
    textInputEl.classList.add("valid");
  } else {
    textInputEl.classList.remove("valid");
    textInputEl.classList.add("invalid");
  }
});
