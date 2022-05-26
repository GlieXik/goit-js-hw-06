const userName = document.querySelector("#name-input");
userName.addEventListener("input", onInputChange);
const changer = document.querySelector("#name-output");

function onInputChange(event) {
  changer.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
}
