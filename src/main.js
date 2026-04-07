import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions";


const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");
const endMessage = document.querySelector(".end-message");


let currentQuery = "";
let currentPage = 1;
const PER_PAGE = 15;


async function searchImages(query, page = 1) {
  showLoader();
  try {
    const data = await getImagesByQuery(query, page, PER_PAGE);
    hideLoader();

    if (data.hits.length === 0) {
      hideLoadMoreButton();
      endMessage.style.display = "block";
      return;
    }

    createGallery(data.hits);

    // показати або сховати кнопку Load more
    if (page * PER_PAGE < data.totalHits) {
      showLoadMoreButton();
      endMessage.style.display = "none";
    } else {
      hideLoadMoreButton();
      endMessage.style.display = "block";
    }
  } catch (error) {
    hideLoader();
    iziToast.error({ message: "Something went wrong 😢" });
  }
}


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = e.target.elements["search-text"].value.trim();

  if (!query) {
    iziToast.error({ message: "Please enter a search term!" });
    return;
  }

  if (query !== currentQuery) {
    currentQuery = query;
    currentPage = 1;
    clearGallery();
    hideLoadMoreButton();
    endMessage.style.display = "none";
  }

  await searchImages(currentQuery, currentPage);
  currentPage += 1; 
});

loadMoreBtn.addEventListener("click", async () => {
  await searchImages(currentQuery, currentPage);

  const card = document.querySelector(".gallery .gallery-item");
  if (card) {
    const { height } = card.getBoundingClientRect();
    window.scrollBy({ top: height * 2, behavior: "smooth" });
  }

  currentPage += 1;
});