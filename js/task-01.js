// Задание 1
const navitEl = document.querySelectorAll(".item").length;
console.log(`В списке ${navitEl} категории`);

const categoryEl = document.querySelectorAll(".item");

console.log("Категория:", categoryEl[0].firstElementChild.textContent);
const countEl1 = categoryEl[0].lastElementChild.children.length;
console.log("Количество элементов:", countEl1);

console.log("Категория:", categoryEl[1].firstElementChild.textContent);
const countEl2 = categoryEl[1].lastElementChild.children.length;
console.log("Количество элементов:", countEl2);

console.log("Категория:", categoryEl[2].firstElementChild.textContent);
const countEl3 = categoryEl[2].lastElementChild.children.length;
console.log("Количество элементов:", countEl3);






