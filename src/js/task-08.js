//======== 1 ==========

const formEl = document.querySelector(".login-form");
function handleFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }
  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  event.currentTarget.reset();
}
formEl.addEventListener("submit", handleFormSubmit);

//======== 2 ==========
// const formEl = document.querySelector(".login-form");
// function handleFormSubmit(event) {
//   event.preventDefault();
//   const form = event.currentTarget;
//   const inputs = form.elements;
//   const formData = {};
//   for (const input of inputs) {
//     if (input.tagName === "BUTTON") {
//       continue;
//     }
//     if (input.value === "") {
//       return alert("Все поля должны быть заполнены!");
//     }
//     formData[input.name] = input.value;
//   }
//   console.log(formData);
//   form.reset();
// }
// formEl.addEventListener("submit", handleFormSubmit);
