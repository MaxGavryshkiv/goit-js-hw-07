// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего
// вставит все li за одну операцию в список ul.ingredients.
//  Для создания DOM-узлов используй document.createElement().
const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];
console.table(ingredients)


// const ulRef = document.querySelector('#ingredients');
const product = ingredient => {
const liRef = document.createElement('li');
liRef.textContent = ingredient;
// ulRef.appendChild(liRef);
return liRef;
};

const productCard = ingredients.map(ingredient => product(ingredient));

console.log(productCard);

const productlistRef = document.querySelector('#ingredients');
console.log(productlistRef);

productlistRef.append(...ingredients);


// ingredients.forEach(ingredient => {
//   console.log(product(ingredient))  
// })
