const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");

const counterValue = document.querySelector("#value");
let value = 0;

decrementBtn.addEventListener("click", onClickDecrease);

function onClickDecrease() {
  value -= 1;
  counterValue.textContent = value;
}

incrementBtn.addEventListener("click", onClickIncrease);
function onClickIncrease() {
  value += 1;
  counterValue.textContent = value;
}
