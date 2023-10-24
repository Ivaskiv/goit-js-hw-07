import { galleryItems } from "./gallery-items.js";
// Change code below this line
//! 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
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
//!2. Реалізація делегування на ul.gallery і отримання url великого зображення.
galleryElement.addEventListener("click", (event) => {
  event.preventDefault();
  //перевірка чи клікнуто на зображенні:
  if (event.target.tagName !== "IMG") {
    return;
  }
  // Якщо так, то отримати URL великого зображення з використанням basicLightbox
  // Цей код створює модальне вікно з зображенням та встановлює велике зображення, вказане в атрибуті data-source, на яке клікнули.
  //! 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width='800' height='600'>`,
    {
      //!4. Відкриття модального вікна по кліку на елементі галереї.
      onShow: () => {
        document.addEventListener("keydown", onEsc); //modal open
      },
      onClose: () => {
        document.removeEventListener("keydown", onEsc); //modal close
      },
    }
  );
  function onEsc(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
});

//! 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox =>в HTML!!!(8, 20 РЯДОК) Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
