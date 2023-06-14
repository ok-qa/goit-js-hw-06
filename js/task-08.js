const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const password = elements.password.value;

  if (email === "" || password === "") {
    alert("All fields must be filled in!");

  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
  }
  event.currentTarget.reset();
}

