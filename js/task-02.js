// Задание 2
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список 
// ul.ingredients.Для создания DOM - узлов используй document.createElement().




const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


/*ingredients.forEach((ingredient) => {
  const contentEl = document.querySelector("#ingredients");
  const nameEl = document.createElement("li");
  nameEl.textContent = ingredient;
  contentEl.append(nameEl);
});*/



const vegetables = document.querySelector("#ingredients");

const vegetablesLi = ingredients.map(ingredient => {
  const liList = document.createElement("li");
  liList.textContent = ingredient;
  return liList;
});

vegetables.append(...vegetablesLi);
