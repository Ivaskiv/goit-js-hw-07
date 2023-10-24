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
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width='800' height='600'>`,
    {
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
// ****************II********************** //

// const galleryElements = document.querySelector(".gallery");
// // const galleryCreate = makeGallery(galleryItems);
// galleryElements.insertAdjacentHTML("beforeend", galleryCreate);
// galleryElements.addEventListener("click", openGalleryModal);

// const imageInstance = basicLightbox.create(document.querySelector("#image"));
// document.querySelector("button.image").onclick = imageInstance.show;

// //create elements HTML
// // import * as basicLightbox from "basiclightbox";

// const galleryCreate = basicLightbox.create(`
// <a class="gallery__item" href=${original}>
//         <img class="gallery__image" src=${preview} alt=${description} />
//       </a>
// `);

// instance.show();
// // function makeGallery(galleryItems) {
// //   return galleryItems
// //     .map(({ preview, original, description }) => {
// //       return `
// //       <a class="gallery__item" href=${original}>
// //         <img class="gallery__image" src=${preview} alt=${description} />
// //       </a>
// //     `;
// //     })
// //     .join("");
// // }
// function openGalleryModal(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "img") {
//     return;
//   }
//   instance.element().querySelector("img").src = event.target.dataset.source;
// }
// instance.show();
// //create el. gallery
// const instance = basicLightbox.create(`<img src=''>`, {
//   onShow: () => {
//     document.addEventListener("keydown", onEsc); //modal open
//   },
//   onClose: () => {
//     document.removeEventListener("keydown", onEsc); //modal close
//   },
// });
// function onEsc(e) {
//   if (e.code === "Escape") {
//     instance.close();
//   }
// }
// ****************I********************** //
// // Формуємо розмітку галереї на основі масиву даних
// const createGallery = (galleryItems) => {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//             <a class="gallery__item" href=${original}>
//                 <img class="gallery__image" src=${preview} alt=${description} />
//             </a>`;
//     })
//     .join("");
// };

// // Рендеримо розмітку галереї
// galleryElements.insertAdjacentHTML("beforeend", createGallery(galleryItems));

// const lightbox = new basicLightbox(".gallery a", {
//   overlayOpacity: 0.5,
//   captionDelay: 250,
//   captionsData: "alt",
//   fadeSpeed: 250,
//   rtl: true,
// });

// //делегування подій
// galleryElements.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (event.target.tagName === "img") {
//     const largeImageURL = event.target.dataset.source; //отримати url
//     console.log(largeImageURL);
//     const instance = basicLightbox.create(`
//     <img src='${largeImageURL}' alt='Image description'> width="800" height="600"`);
//     instance.show();
//   }
// });
