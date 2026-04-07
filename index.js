/* empty css                      */import{a as d,S as f,i}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="55192868-99d7df8eeab1d57d8ebdc17ea",p="https://pixabay.com/api/";async function y(o){return(await d.get(p,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),g=new f(".gallery a");function h(o){const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:n,comments:l,downloads:u})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img src="${s}" alt="${e}" />
          </a>
          <div class="info">
            <ul>
            <li>Likes:<span>${r}</span></li>
            <li>Views:<span>${n}</span></li>
            <li>Comments:<span>${l}</span></li>
            <li>Downloads:<span>${u}</span></li>
            </ul>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",t),g.refresh()}function L(){c.innerHTML=""}function w(){document.querySelector(".loader").classList.add("show")}function b(){document.querySelector(".loader").classList.remove("show")}const S=document.querySelector(".form");S.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){i.error({message:"Please enter a search term!"});return}L(),w();try{const s=await y(t);if(s.hits.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(s.hits)}catch{i.error({message:"Something went wrong 😢"})}finally{b()}});
//# sourceMappingURL=index.js.map
