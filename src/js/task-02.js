const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const itemRef = ingredients.forEach((ingredient) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredient;
//   listItem.classList.add("item");
//   const addItemRef = document.querySelector("#ingredients");
//   addItemRef.append(listItem);
// });
// map
const list = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  return listItem;
});
const addItemRef = document.querySelector("#ingredients");
addItemRef.append(...list);
