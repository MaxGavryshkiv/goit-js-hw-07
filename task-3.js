// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.


const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

//   console.log(images);


const galleryRef = document.querySelector('#gallery');
const galeryCard = images.map(image => {
  return image  
})

const image = galeryCard

galleryRef.insertAdjacentHTML('afterbegin',
 `<li class = 'js-liRef'>
 <img class = 'js-liRef__img' src = ${image[0].url} alt = '${image[0].alt}' width='200px'>
</li>
<li class = 'js-liRef'>
 <img class = 'js-liRef__img' src = ${image[1].url} alt = '${image[1].alt}' width='200px'>
</li>
<li class = 'js-liRef'>
 <img class = 'js-liRef__img' src = ${image[2].url} alt = '${image[2].alt}' width='200px'>
</li>

`) 
console.log(galleryRef)