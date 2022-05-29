function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const create = document.querySelector("[data-create]");
console.log(create);
const numberOf = document.querySelector("[type='number']");
console.log(numberOf);
