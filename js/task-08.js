const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const pass = formElements.password.value;

  const formData = {
    mail,
    pass,
  };
  console.log(formData);
}
