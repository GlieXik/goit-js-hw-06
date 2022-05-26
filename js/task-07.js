const fsControler = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const fsChanger = (event) => {
  text.style.fontSize = event.currentTarget.value + "px";
  console.log(event.currentTarget.value);
};
fsControler.addEventListener("input", fsChanger);
