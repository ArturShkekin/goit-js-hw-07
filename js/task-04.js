// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



const spanvalue = document.querySelector("#value");
const buttonIncrement = document.querySelector('#counter').lastElementChild;
const buttonDecrement = document.querySelector('#counter').firstElementChild;
let counterValue = 0;

const increment = () => (
    counterValue += 1
 );


const decrement = () => (
    counterValue -= 1
);
    
buttonIncrement.addEventListener("click", () => {
    spanvalue.innerText = increment();
});
    
buttonDecrement.addEventListener("click", () => {
    spanvalue.innerText = decrement()
});


    
