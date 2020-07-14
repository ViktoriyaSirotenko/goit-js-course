"use strict";
import galleryItems from "./gallery-items.js";

const jsGallery = document.querySelector(".js-gallery");

// building the list

jsGallery.append(
  ...galleryItems.map((item) => {
    const link = document.createElement("a");
    link.href = item.original;
    link.classList.add("gallery__link");

    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");

    const image = document.createElement("img");
    image.src = item.preview;
    image.dataset.source = item.original;
    image.alt = item.description;
    image.classList.add("gallery__image");

    return listItem.appendChild(link.appendChild(image));
  })
);

// modal logic

const lightboxDiv = document.querySelector("div.lightbox");

const openModal = (e) => {
  lightboxDiv.classList.add("is-open");
  lightboxImage.src = e.target.dataset.source;
  e.preventDefault();
};

jsGallery.addEventListener("click", openModal);

const lightboxImage = document.querySelector("img.lightbox__image");

const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);

const lightboxOverlay = document.querySelector("div.lightbox__content");

// close modal logic

const closeModal = function (e) {
  lightboxDiv.classList.remove("is-open");
  lightboxImage.src = "";
};

closeButton.addEventListener("click", closeModal);

// next/previous image switching logic

const changeImage = function (currentImage, keyCode) {
  const allImages = galleryItems.map((item) => item.original);
  for (let i = 0; i < allImages.length; i++) {
    if (allImages[i] === currentImage) {
      if (keyCode == "ArrowLeft") {
        lightboxImage.src =
          i !== 0 ? allImages[i - 1] : allImages[allImages.length - 1];
        return;
      }
      if (keyCode == "ArrowRight") {
        lightboxImage.src =
          i !== allImages.length - 1 ? allImages[i + 1] : allImages[0];
        return;
      }
    }
  }
};

// react to keypresses

const reactToKeypresses = function (e) {
  if (lightboxDiv.classList.contains("is-open")) {
    if (e.code === "Escape") {
      closeModal();
      return;
    }
    if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
      changeImage(lightboxImage.src, e.code);
    }
  }
};

document.addEventListener("keydown", reactToKeypresses.bind(galleryItems));

const overlayClick = function (e) {
  if (e.target === e.currentTarget) {
    closeModal(e);
  }
};

lightboxOverlay.addEventListener("click", overlayClick);
