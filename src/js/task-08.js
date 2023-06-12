const form = document.querySelector('.login-form');

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const email = elements.email.value;
    const password = elements.password.value;

    console.log(email, password);

  if (elements.email.value === "" || elements.password.value === "") {
    alert("All fields must be filled in!");
    console.log(email, password);
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
  }
event.currentTarget.reset();
}
