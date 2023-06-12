const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.map((el) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  ingredientsList.append(listEl);
  listEl.innerHTML = el;
});
console.log(ingredientsList);
