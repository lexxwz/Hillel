const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector("div.lightbox"),
  lightboxOverlay: document.querySelector("div.lightbox__overlay"),
  lightboxImage: document.querySelector("img.lightbox__image"),
  lightboxCloseButton: document.querySelector("button.lightbox__button"),
};

function createAndAddElement(elementType, parent, addClass) {
  const newElement = document.createElement(elementType);
  newElement.classList.add(addClass);
  parent.appendChild(newElement);
  return newElement;
}

function hendlerImageClick(event) {
  if (event.target.nodeName === "IMG") {
    refs.lightbox.classList.add("is-open");
    refs.lightboxImage.src = event.target.dataset.source;
    refs.lightboxImage.alt = event.target.alt;
    refs.lightboxImage.dataset.indexInArray = event.target.dataset.indexInArray;
    refs.lightboxCloseButton.addEventListener("click", hendlerCloseLightbox);
    refs.lightboxOverlay.addEventListener("click", hendlerCloseLightbox);
    document.addEventListener("keydown", hendlerKeydown);
  }
}

function hendlerKeydown(event) {
  if (event.key === "Escape") {
    hendlerCloseLightbox();
  }
  if (event.key === "ArrowLeft") {
    const changedImgIndex =
      --refs.lightboxImage.dataset.indexInArray < 0
        ? galleryItems.length - 1
        : refs.lightboxImage.dataset.indexInArray;
    refs.lightboxImage.src = galleryItems[changedImgIndex].original;
    refs.lightboxImage.alt = galleryItems[changedImgIndex].description;
    refs.lightboxImage.dataset.indexInArray = changedImgIndex;
  }
  if (event.key === "ArrowRight") {
    const changedImgIndex =
      ++refs.lightboxImage.dataset.indexInArray >= galleryItems.length
        ? "0"
        : refs.lightboxImage.dataset.indexInArray;
    refs.lightboxImage.src = galleryItems[changedImgIndex].original;
    refs.lightboxImage.alt = galleryItems[changedImgIndex].description;
    refs.lightboxImage.dataset.indexInArray = changedImgIndex;
  }
}

function hendlerCloseLightbox() {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImage.src = "";
  refs.lightboxImage.alt = "";
  refs.lightboxCloseButton.removeEventListener("click", hendlerCloseLightbox);
  refs.lightboxOverlay.removeEventListener("click", hendlerCloseLightbox);
  document.removeEventListener("keydown", hendlerKeydown);
}

galleryItems.forEach((image) => {
  const newLi = createAndAddElement("li", refs.gallery, "gallery__item");
  const newA = createAndAddElement("a", newLi, "gallery__link");
  const newImg = createAndAddElement("img", newA, "gallery__image");
  newImg.src = image.preview;
  newImg.alt = image.description;
  newImg.dataset.source = image.original;
  newImg.dataset.indexInArray = galleryItems.indexOf(image);
});

refs.gallery.addEventListener("click", hendlerImageClick);