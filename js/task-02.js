// Задание 2
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


ingredients.forEach((ingredient) => {
  const contentEl = document.querySelector("#ingredients");
  const nameEl = document.createElement("li");
  nameEl.textContent = ingredient;
  contentEl.append(nameEl);
});


