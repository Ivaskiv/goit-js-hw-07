// Завдання 2 - бібліотека SimpleLightbox
// Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.

// Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

// <li class="gallery__item">
//    <a class="gallery__link" href="large-image.jpg">
//       <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//    </a>
// </li>

// Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryElement = document.querySelector(".gallery");
//функція буде приймати масив і створювати HTML-розмітку для кожного елемента галереї
function createGallery(img) {
  return img
    .map(({ preview, original, description }) => {
      return `
        <li class='gallery__item'>
          <a class='gallery__link' href='${original}'>
            <img 
              class='gallery__image'
              src='${preview}'
              data-source='${original}'
              alt='${description}'
            />
          </a>
        </li>
    `;
    })
    .join("");
}
galleryElement.insertAdjacentHTML("beforeend", createGallery(galleryItems));
const lightbox = new SimpleLightbox(".gallery__link", {
  /* options */
  captionDelay: 250, //вказує затримку в мілісекундах перед відображенням підпису до зображення
  captionsData: "alt", //вказує, звідки брати підписи для зображень
});

//!ТЕОРІЯ
//https://simplelightbox.com/
//затемнення(overlay) під час відкриття приклад: https://codepen.io/mrbadger/pen/gwpXBQ

// const lightbox = new SimpleLightbox(".gallery__link", {
//!     /*MY options */
//     captionDelay: 250, //вказує затримку в мілісекундах перед відображенням підпису до зображення
//     captionsData: "alt", //вказує, звідки брати підписи для зображень
//     overlay: true, //вказує, чи слід відображати затемнення(overlay) під час відкриття
//     navText: ["←", "→"], //вказує текст, який використовувати для кнопок навігації "Назад" і "Вперед"
//     enableKeyboard: true, //вказує, чи слід дозволити навігацію з використанням клавіш клавіатури
//     scrollZoom: true, //вказує, чи слід дозволити зумування (збільшення/зменшення) зображень, використовуючи прокрутку колеса миші
//   });
