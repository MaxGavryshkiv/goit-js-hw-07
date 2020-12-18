// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего
// вставит все li за одну операцию в список ul.ingredients.
//  Для создания DOM-узлов используй document.createElement().
const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

// const liRef = ingredients.map((elem) => document.createElement("li"));
// let ulList = document.getElementById("ingredients");
// const liRef = ingredients.forEach((ingredients) => {
//   let item = document.createElement("li");
//   items.innerHTML = ingredient;
//   ulList.append(items);
//   parent.append(...items);
// });
// console.log(liRef);

let ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach((ingredient) => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  ulList.append(items);
  parent.append(...items);
});

console.log(foodIngredients);
