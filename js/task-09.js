const colorBtn = document.querySelector("button");

const changeColor = () => {
  const getRandomHexColor = Math.floor(Math.random() * 0xffffff).toString(16);

  document.body.style.background = `#${getRandomHexColor}`;
  console.log("click on button, got color", getRandomHexColor);
};

colorBtn.addEventListener("click", changeColor);
