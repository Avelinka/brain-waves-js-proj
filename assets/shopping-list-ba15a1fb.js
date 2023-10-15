(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();document.querySelector(".js-go-to-cart");document.querySelector(".js-list");const u=document.querySelector(".js-list"),c="shoppingList",l=JSON.parse(localStorage.getItem(c))||[];function a(e){return e.map(({author:o,book_image:i,buy_links:n,description:t,title:s})=>`
    <li data-id="${s}" class="js-product shopping-list-item">
        <img src="${i}" alt="${s}" width="116" height="165" class="shop-img"/> 
        <div class="shop-item-div">
            <div class="top-item-div">
                <h2 class="shopping-list-title">${s}</h2>
                <button class="js-remove" data-id="${s}">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </button>
            </div>
            <p class="shopping-list-text">${p(t,18)}</p>
            <div class="author-icons">
                <p class="shopping-list-author">${o}</p>
                <div class="book-links">
                    ${g(n)}
                </div>
            </div>
        </div>
    </li>
`).join("")}function g(e){return`<a href="${e[0].url}" target="_blank"> <img src="/src/images/mask_group_corrected.png" alt="Link Icon" class="link-icon amazon" width="32" height="11"></a>
    <a href="${e[1].url}" target="_blank"> <img src="/src/images/image_1.png" alt="Link Icon" class="link-icon apple-book" width="16" height="16"></a>
    <a href="${e[2].url}" target="_blank"> <img src="/src/images/Icon1.png" alt="Link Icon" class="link-icon book-shop" width="16" height="16"></a>`}console.log(a(l));if(localStorage.getItem("shoppingList")===null){const e=document.querySelector(".is-hidden-shop-list"),o=document.querySelector(".cart");e.classList.remove(".is-hidden-shop-list"),o.classList.add("cart")}else{const e=a(l);u.insertAdjacentHTML("beforeend",e)}let d=document.querySelectorAll(".js-remove");function h(e){let o=e.target.closest(".js-product");if(o&&(o.remove(),localStorage.removeItem("shoppingList"),console.log("Дані видалені із локального сховища."),m(),!document.querySelector(".shopping-list-item"))){const i=document.querySelector(".is-hidden-shop-list"),n=document.querySelector(".cart");i.classList.remove(".is-hidden-shop-list"),n.classList.add("cart")}}function m(){let e=[];d.forEach(function(o){let i=o.getAttribute("data-id");e.push(i)}),localStorage.setItem("selectedProducts",JSON.stringify(e)),console.log(localStorage),e.length===0&&document.querySelector(".message").classList.remove(".is-hidden-shop-list")}window.addEventListener("beforeunload",function(){localStorage.setItem(c)});d.forEach(function(e){e.addEventListener("click",h)});function p(e,o){const i=e.split(" ");return i.length<=o?e:i.slice(0,o).join(" ")+" ..."}
