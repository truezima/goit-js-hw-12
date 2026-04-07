/* empty css                      */import{a as w,S as b,i as c}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const S="55192868-99d7df8eeab1d57d8ebdc17ea",q="https://pixabay.com/api/";async function v(o,t=1,s=15){return(await w.get(q,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s}})).data}const f=document.querySelector(".gallery"),P=new b(".gallery a");function B(o){const t=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:a,comments:g,downloads:L})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${s}" alt="${e}" />
          </a>
          <div class="info">
            <ul>
            <li>Likes:<span>${r}</span></li>
            <li>Views:<span>${a}</span></li>
            <li>Comments:<span>${g}</span></li>
            <li>Downloads:<span>${L}</span></li>
            </ul>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",t),P.refresh()}function p(){f.innerHTML=""}function E(){document.querySelector(".loader").classList.add("show")}function y(){document.querySelector(".loader").classList.remove("show")}function M(){document.querySelector(".load-more").style.display="block"}function i(){document.querySelector(".load-more").style.display="none"}const $=document.querySelector(".form"),O=document.querySelector(".load-more"),u=document.querySelector(".end-message");let d="",l=1;const m=15;async function h(o,t=1){E(),i();try{const s=await v(o,t,m);if(y(),s.hits.length===0){p(),i(),u.style.display="block",c.warning({message:"Sorry, there are no images matching your search query."});return}B(s.hits),t*m<s.totalHits?(M(),u.style.display="none"):(i(),u.style.display="block",c.info({message:"We're sorry, but you've reached the end of search results."}))}catch{y(),c.error({message:"Something went wrong 😢"})}}$.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){c.error({message:"Please enter a search term!"});return}d=t,l=1,p(),i(),u.style.display="none",await h(d,l),l+=1});O.addEventListener("click",async()=>{i(),await h(d,l);const o=document.querySelector(".gallery .gallery-item");if(o){const{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}l+=1});
//# sourceMappingURL=index.js.map
