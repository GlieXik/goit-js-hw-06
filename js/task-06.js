const validator = document.querySelector("#validation-input");

const dataLengthCheker = () => {
  const inputText = validator.value.trim();

  if (inputText === "") {
    validator.classList.remove("invalid");
  } else if (inputText.length === 6) {
    validator.classList.remove("invalid");
    validator.classList.add("valid");
  } else {
    validator.classList.add("invalid");
    validator.classList.remove("valid");
  }
};

validator.addEventListener("input", dataLengthCheker);
