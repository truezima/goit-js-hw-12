import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const lightbox = new SimpleLightbox(".gallery a");

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="info">
            <ul>
            <li>Likes:<span>${likes}</span></li>
            <li>Views:<span>${views}</span></li>
            <li>Comments:<span>${comments}</span></li>
            <li>Downloads:<span>${downloads}</span></li>
            </ul>
          </div>
        </li>
      `;
      }
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  document.querySelector(".loader").classList.add("show");
}

export function hideLoader() {
  document.querySelector(".loader").classList.remove("show");
}