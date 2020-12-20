// Счетчик состоит из спана и кнопок, 
// которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится 
// текущее значение счетчика.
// Создай функции increment и decrement для увеличения и 
// уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const sub = document.querySelector("[data-action='increment']");
const add = document.querySelector("[data-action='decrement']");
const span = document.querySelector("#value");

let counterValue = 0;
const increment = () =>{
    counterValue += 1;
    
    span.textContent = counterValue;
};

const decrement = () =>{
    counterValue -= 1;
    
    span.textContent = counterValue;
};

sub.addEventListener("click", increment);
add.addEventListener("click", decrement);