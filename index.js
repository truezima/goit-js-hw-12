/* empty css                      */import{a as L,S as w,i as y}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const b="55192868-99d7df8eeab1d57d8ebdc17ea",S="https://pixabay.com/api/";async function q(o,t=1,s=15){return(await L.get(S,{params:{key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s}})).data}const f=document.querySelector(".gallery"),v=new w(".gallery a");function P(o){const t=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:a,comments:g,downloads:h})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${s}" alt="${e}" />
          </a>
          <div class="info">
            <ul>
            <li>Likes:<span>${r}</span></li>
            <li>Views:<span>${a}</span></li>
            <li>Comments:<span>${g}</span></li>
            <li>Downloads:<span>${h}</span></li>
            </ul>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",t),v.refresh()}function B(){f.innerHTML=""}function E(){document.querySelector(".loader").classList.add("show")}function u(){document.querySelector(".loader").classList.remove("show")}function M(){document.querySelector(".load-more").style.display="block"}function d(){document.querySelector(".load-more").style.display="none"}const $=document.querySelector(".form"),O=document.querySelector(".load-more"),l=document.querySelector(".end-message");let c="",i=1;const m=15;async function p(o,t=1){E();try{const s=await q(o,t,m);if(u(),s.hits.length===0){d(),l.style.display="block";return}P(s.hits),t*m<s.totalHits?(M(),l.style.display="none"):(d(),l.style.display="block")}catch{u(),y.error({message:"Something went wrong 😢"})}}$.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){y.error({message:"Please enter a search term!"});return}t!==c&&(c=t,i=1,B(),d(),l.style.display="none"),await p(c,i),i+=1});O.addEventListener("click",async()=>{await p(c,i);const o=document.querySelector(".gallery .gallery-item");if(o){const{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}i+=1});
//# sourceMappingURL=index.js.map
