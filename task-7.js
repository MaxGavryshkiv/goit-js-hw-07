// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function fontSizeCtr(value) {
    textRef.style.fontSize = `${value.target.value}px`;
};
inputControlRef.addEventListener('input', fontSizeCtr);