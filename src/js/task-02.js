const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulList = document.querySelector("#ingredients");

const arr = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList = "item";
  return li;
});

ulList.append(...arr);
