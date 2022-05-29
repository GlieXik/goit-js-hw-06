function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("[type='number']"),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  conteiner: document.getElementById("boxes"),
};

console.log(refs);

const createBoxes = () => {
  refs.conteiner.textContent = "";
  const count = Number(refs.input.value);
  const items = [];
  for (let i = 0; i < count; i += 1) {
    const div = document.createElement("div");
    div.style.background = getRandomHexColor();
    div.style.width = i * 10 + 20 + "px";
    div.style.height = i * 10 + 20 + "px";

    items.push(div);
  }

  refs.conteiner.append(...items);
};
const destroy = () => {
  refs.conteiner.textContent = "";
  refs.input.value = "";
};

refs.create.addEventListener("click", createBoxes);
refs.destroy.addEventListener("click", destroy);
