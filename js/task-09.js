const colorBtn = document.querySelector("button");
const colorOutput = document.querySelector(".color");

const changeColor = () => {
  const getRandomHexColor = Math.floor(Math.random() * 0xffffff).toString(16);

  document.body.style.background = `#${getRandomHexColor}`;
  console.log("click on button, got color", getRandomHexColor);

  colorOutput.textContent = getRandomHexColor;
};

colorBtn.addEventListener("click", changeColor);


