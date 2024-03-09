import{r,h as M,u as j,c as T,a as _,b as q}from"./assets/apple-books-logo-60ec3a74.js";import{a as g,i as w}from"./assets/vendor-722ab571.js";const k=document.getElementById("to-top-button");window.addEventListener("scroll",()=>{window.pageYOffset>100?k.classList.add("active"):k.classList.remove("active")});k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});function L(){window.scrollTo({top:0,behavior:"smooth"})}const v=document.querySelector(".loader");function m(){v.classList.remove("hidden")}function d(){v.classList.add("hidden")}const p="https://books-backend.p.goit.global/books";async function H(){const t=`${p}/category-list`;return(await g.get(t)).data}async function b(){const t=`${p}/top-books`;return(await g.get(t)).data}async function $(t){t=t.trim();const e={category:t},o=`${p}/category`;return(await g.get(o,{params:e})).data}async function E(t){t=t.trim();const e=`${p}/${t}`;return(await g.get(e)).data}let f;function I({_id:t,author:e,contributor:o,title:a,book_image:s,list_name:n}){return f=n,`<li class="book-li-item">
                <button type="button" class="book-item" id="${t}" aria-label="${a} ${o}">
                <div class="book-wrapper">
                <img class="book-img" src="${s}" alt="${a} ${o}">
                <div class="book-overlay">
                <p class="book-overlay-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-info">
                <p class="book-info-title">${a}</p>
                <p class="book-info-author">${e}</p>
                </div>
                </button>
            </li>`}function A({books:t}){const e=t.map(I).join("");return`<li class="book-item-home">
                    <h3 class="book-category-title">${f}</h3>
                    <ul class="books-category-list">`+e+`</ul>
                    <button class="button see-more-btn" data-js="${f}" aria-label="See more">SEE MORE</button>
                </li>`}function R(t){return'<h2 class="books-home-title">Best Sellers <span class="books-home-title-span">Books</span></h2><ul class="books-home-list">'+t.map(A).join("")+"</ul>"}function h(t){const e=R(t);r.mainContainer.innerHTML=e}function l(t){w.error({title:"Error",message:t})}async function U(){m();try{const t=await b();h(t)}catch(t){l(t)}d()}U();const C=document.querySelector(".categories-list");function W(t){return`<li class="category-item"><button type="button" class="category-button" data-category="${t}" aria-label="${t}">${t}</button></li>`}function z(t){const o='<li class="category-item"><button type="button" class="category-button js-current-category" data-category="all categories" aria-label="all categories">All categories</button></li>'+t.map(W).join("");C.innerHTML=o}async function u(t){await document.querySelector(".js-current-category").classList.remove("js-current-category"),document.querySelector(`button[data-category="${t}"]`).classList.add("js-current-category")}async function x(t){if(t.preventDefault(),t.target.classList.contains("category-button"))if(r.mainContainer.innerHTML="",u(t.target.dataset.category),t.target.dataset.category==="all categories"){try{const e=await b();m(),h(e),u(t.target.dataset.category),d()}catch(e){l(e)}return}else try{const e=await $(`${t.target.dataset.category}`);r.mainContainer.innerHTML=await B(`${t.target.dataset.category}`,e),u(t.target.dataset.category),d()}catch(e){l(e)}}async function B(t,e){const o=t.split(" ");return` 
    <h2 class="block_books-title"
  >${o.splice(0,o.length/2).join(" ")} <span class="block_books-colortitle">${o.splice(o.length/2,o.length).join(" ")}</span></h2> 
          <ul class="block_books-list">${await O(e)}</ul>
          <button class="button all-categories_btn" data-js="All Categories" aria-label="All categories">All Categories</button>`}async function O(t){return t.map(D).join("")}function D({author:t,book_image:e,title:o,description:a,_id:s,contributor:n}){return`<li class="book-li-item">
    <button type="button" class="book-item" id="${s}" aria-label="${o} ${n}">  
    <div class="books_wrapper"> 
    <img class="books_image" src="${e}"  alt="${a}" loading="lazy" width="335" height="485" /> 
    <div class="books_overlay"> 
    <p class="books_overlay-text">QUICK VIEW</p> 
    </div> 
    </div> 
    <div class="books_info">  
    <p class="books_info-title">${o}</p>  
    <p class="books_info-author">${t}</p>  
    </div>
    </button>
    </li>`}async function K(t){if(t.preventDefault(),t.target.classList.contains("see-more-btn")){L();const e=t.target.dataset.js;r.mainContainer.innerHTML="",m();try{const o=await $(`${e}`);r.mainContainer.insertAdjacentHTML("beforeend",await B(`${e}`,o)),u(`${e}`),d()}catch(o){l(o)}}else if(t.target.classList.contains("all-categories_btn")){L(),r.mainContainer.innerHTML="";try{const e=await b();m(),h(e),u("all categories"),d()}catch(e){l(e)}}}const S=document.querySelector(".js-search"),P=document.querySelector(".search-city"),V=document.getElementById("js-info-weather-city"),F=document.querySelector("p.forecast-text");S.addEventListener("submit",Q);async function Q(t){t.preventDefault();const e=t.target.elements.city.value.trim()||"";try{const o=await Y(e),a=o.location.country,s=o.current.condition.icon,n=o.current.temp_c,i=o.current.condition.text,c=`
                <h2 class="country-city-title">${a}, ${e}</h2>
                <img class="weather-city-image" src="${s}" alt="${i}">
                <p class="weather-city-info">Temp.: ${Math.floor(n)} &deg;C</p>
                <p class="weather-city-info">${i}</p>
        `;V.innerHTML=c,F.textContent=G(i),t.target.elements.city.value="",P.blur()}catch(o){w.error({title:"Error",message:o.message})}S.reset()}async function Y(t){const e="https://api.weatherapi.com/v1";return await(await g.get(`${e}/current.json`,{params:{key:"14c56bddeab14583a6e164909231107",q:t,lang:"en"}})).data}function G(t){const e="Rain taps softly, like music, setting the scene for books. Rainy days are cozy, perfect for getting lost in books",o="Snow falls gently, making reading by the fire even better. Snowy weather creates a peaceful setting for immersive reading sessions",a="Sunny days make reading outside under trees delightful. Sunlight makes reading enjoyable with its warm and bright rays",s="Any weather is book weather! Embrace reading anytime, anywhere",n="Soft light filters through the clouds, ideal for cozy reading. Cloudy days offer a calm atmosphere, perfect for uninterrupted reading";return t.toLowerCase().includes("cloudy")?n:t.toLowerCase().includes("rain")?e:t.toLowerCase().includes("snow")?o:t.toLowerCase().includes("sunny")?a:s}const J=()=>{const t={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),modalShopigListBtn:document.querySelector(".modal-pop-up-btn")};t.modalShopigListBtn.addEventListener("click",N),t.openModalBtn.forEach(c=>{c.addEventListener("click",o)}),t.closeModalBtn.addEventListener("click",a),t.modal.addEventListener("click",e),document.addEventListener("keydown",s);function e(c){c.target===c.currentTarget&&a()}function o(){t.modal.classList.toggle("is-hidden"),t.modal.classList.toggle("is-open"),t.modal.classList.contains("is-hidden")?(document.body.classList.add("no-scroll"),document.addEventListener("keydown",s),t.closeModalBtn.addEventListener("click",a),t.modal.addEventListener("click",e)):(n(),i())}function a(){t.modal.classList.add("is-hidden"),n(),i()}function s(c){c.key==="Escape"&&a()}function n(){document.body.classList.remove("no-scroll")}function i(){t.openModalBtn.forEach(c=>{c.removeEventListener("click",o)}),t.closeModalBtn.removeEventListener("click",a),t.modal.removeEventListener("click",e),document.removeEventListener("keydown",s)}};async function N(t){const e=t.target.previousElementSibling.previousElementSibling.firstElementChild.id,o=await E(e);M(o)}let y;r.booksContainer.addEventListener("click",X);async function X(t){if(y=t.target.closest(".book-item"),r.modalWindowContent.innerHTML="",y){r.modalWindow.classList.remove("is-hidden"),J();try{r.body.classList.add("no-scroll");let e=y.id,o=await E(e);tt(o)}catch(e){l(e)}}}function Z({book_image:t,contributor:e,description:o,_id:a,title:s,author:n,buy_links:i}){return`<img class="modal-img" src="${t}" alt="${s} ${e}" id="${a}" width="278" height="408">
            <div class="modal-img-description">
                <h2 class="modal-book-title">${s}</h2>
                <h3 class="modal-book-author">${n}</h3>
                <p class="modal-book-desc">${o}</p>
                <ul class="modal-shops">
                    <li class="modal-shop">
                        <a href="${i[0].url}" target="_blank" class="modal-shop-link">
                            <img class="amazon" src="${_}" alt="Shop Logo">
                        </a>

                    <li class="modal-shop">
                        <a href="${i[1].url}" target="_blank" class="modal-shop-link">
                            <img class="book-shop" src="${q}" alt="Shop Logo">
                        </a>
                </ul>
            </div>`}function tt(t){j(!T(t._id));const e=Z(t);r.modalWindowContent.insertAdjacentHTML("afterbegin",e)}async function et(){m();try{const e=(await H()).map(o=>o.list_name).toSorted();z(e)}catch(t){l(t)}d()}C.addEventListener("click",x);r.mainContainer.addEventListener("click",K);et();
//# sourceMappingURL=commonHelpers.js.map
