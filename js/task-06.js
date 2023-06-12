const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onInput);
function onInput(evt) {
  if (
    Number(validationInput.dataset.length) ===
    Number(evt.currentTarget.value.length)
  ) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
    console.log(validationInput.dataset.length);
    console.log(evt.currentTarget.value.length);
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
    alert("Wrong number of symbols!");
  }
}
