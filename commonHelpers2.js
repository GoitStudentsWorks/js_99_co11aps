import{a as b,b as h}from"./assets/apple-books-logo-60ec3a74.js";import"./assets/vendor-722ab571.js";const u="/js_99_co11aps/assets/books-stack-mobile-487658af.png",l="/js_99_co11aps/assets/books-stack-a8e7c57b.png",y="/js_99_co11aps/assets/icons-5a87309a.svg",d="storage-of-books",r=document.querySelector(".shopping-list"),c=document.createElement("li");c.classList.add("empty-message");c.innerHTML=`
  <p>This page is empty, add some books and proceed to order.</p>
  <img 
    class="book-stack-image"
    srcset="${u} 767w, 
            ${l} 768w" 
    sizes="(max-width: 767px) 265px, 100vw" 
    src="${l}" 
    alt="Empty Book Stack"  
  />
`;async function p(){try{return await new Promise((s,t)=>{const e=localStorage.getItem(d);s(e?JSON.parse(e):[])})}catch(o){throw console.error("Error getting stored books:",o),o}}async function k(){try{const o=await p();r.innerHTML="",Array.isArray(o)&&o.length>0?o.forEach(s=>{const t=document.createElement("li");t.appendChild(f(s)),r.appendChild(t)}):r.appendChild(c)}catch(o){console.error("Error rendering books:",o)}}function f(o){const{title:s,list_name:t,description:e,author:g,_id:i,buy_links:n,book_image:m}=o,a=document.createElement("div");return a.classList.add("book-card"),a.innerHTML=`
    <div class="card-book">
  <img class="book-cover" src="${m}" alt="${s}" id="${i}" />
  <div class="shopping-list-img-description">
    <h2 class="book-title">${s}</h2>
    <h3 class="book-category">${t}</h3>
    <p class="book-description">${e}</p>
    <p class="book-author">${g}</p>
    <ul class="storage-shops">
      <li class="list-shop">
        <a href="${n[0].url}" target="_blank" aria-label="Buy on Amazon" class="storage-shop-link">
          <img class="amazon" width="32" height="11"  src="${b}" alt="Shop Logo" />
        </a>
      </li>
      <li class="list-shop">
        <a href="${n[1].url}" target="_blank" aria-label="Buy in Apple books" class="storage-shop-link">
          <img class="book-shop" width="16" height="16" src="${h}" alt="Shop Logo" />
        </a>
      </li>
    </ul>
    <button aria-label="Delete book" type="button"class="remove-book-btn" data-book-id="${i}">
      <svg width="28" height="28" class="remove-icon">
        <use xlink:href="${y}#icon-dump"></use>
      </svg>
    </button>
  </div>
</div>
  `,a}async function v(o){try{const t=(await p()).filter(e=>e._id!=o);localStorage.setItem(d,JSON.stringify(t)),k(t)}catch(s){console.error("Error removing book from localStorage:",s)}}const $=document.querySelector(".shopping-list");$.addEventListener("click",async o=>{const s=o.target.closest(".remove-book-btn");if(s){const t=s.getAttribute("data-book-id");await v(t)}});k();
//# sourceMappingURL=commonHelpers2.js.map
