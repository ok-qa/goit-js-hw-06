const catListEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${catListEl.length}`);

catListEl.forEach((el) =>
  console.log(
    `Category: ${el.firstElementChild.textContent}`,
    `\n Elements ${el.lastElementChild.children.length}`
  )
);

