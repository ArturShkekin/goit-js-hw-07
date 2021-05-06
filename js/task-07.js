// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.






/*function sizeControl(event) {
    span.style.fontSize = `${event.currentTarget.value}px`;
};*/

const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

const sizeControl = (event) => {
    span.style.fontSize = `${event.currentTarget.value}px`
};
input.addEventListener("input", sizeControl);

