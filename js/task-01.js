// Задание 1

const categoryEl = document.querySelectorAll(".item");
console.log(`В списке ${categoryEl.length} категории`);

categoryEl.forEach(element => {
  console.log("Категория:", element.firstElementChild.textContent);
  console.log("Количество элементов:", element.lastElementChild.children.length);
})



