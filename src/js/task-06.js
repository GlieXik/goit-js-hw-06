const validator = document.querySelector("#validation-input");

const dataLengthCheker = (event) => {
  validator.classList.add("invalid");

  if (
    Number(event.currentTarget.attributes[2].nodeValue) ===
    event.currentTarget.value.length
  ) {
    validator.classList.replace("invalid", "valid");
  }
};

validator.addEventListener("input", dataLengthCheker);
