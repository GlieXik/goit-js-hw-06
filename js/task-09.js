function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const text = document.querySelector(".color");
const btn = document.querySelector(".change-color");

const generateColor = (event) => {
  text.textContent = getRandomHexColor();
  document.body.style.background = text.textContent;
};
btn.addEventListener("click", generateColor);
