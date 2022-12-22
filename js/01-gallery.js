import { galleryItems } from './gallery-items.js';
// Change code below this line

const div = document.querySelector(".gallery");

const imageCard = galleryItems.map((obj) => 
` <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
         <img
         class="gallery__image"
         src="${obj.preview}"
         data-source="${obj.original}"
         alt="${obj.description}"/>
        </a>
    </div>`
    ).join("");

div.insertAdjacentHTML("afterbegin", imageCard);

div.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector('img').src = event.target.dataset.source;

  instance.show();
}

const instance = basicLightbox.create(`
   <img class="gallery__image" src="" width="1280" height="853">`,
  {
    onShow: instance => { window.addEventListener('keydown', onEscClick) },
    
   onClose: instance => { window.removeEventListener('keydown', onEscClick) }
 }
 );

 function onEscClick(event) {
            if (event.code === 'Escape') {
              instance.close();
              return;
            }
    };
        
      window.addEventListener("keydown", onImageClose);
    
      function onImageClose(event) {
        if (event.code === "Escape") {
          window.removeEventListener("keydown", onImageClose);
          instance.close();
        return
        }
      }
    
    console.log(galleryItems);