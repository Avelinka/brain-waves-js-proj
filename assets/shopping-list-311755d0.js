import{g as d}from"./swither-theme-581c20a8.js";document.querySelector(".js-go-to-cart");document.querySelector(".js-list");const g=document.querySelector(".js-list"),n="shoppingList",c=JSON.parse(localStorage.getItem(n))||[];function r(e){return e.map(({author:t,book_image:o,buy_links:i,description:a,title:s})=>`
    <li data-id="${s}" class="js-product shopping-list-item">
        <img src="${o}" alt="${s}" width="116" height="165" class="shop-img"/> 
        <div class="shop-item-div">
            <div class="top-item-div">
                <h2 class="shopping-list-title">${s}</h2>
                <button class="js-remove" data-id="${s}">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </button>
            </div>
            <p class="shopping-list-text">${p(a,18)}</p>
            <div class="author-icons">
                <p class="shopping-list-author">${t}</p>
                <div class="book-links">
                    ${u(i)}
                </div>
            </div>
        </div>
    </li>
`).join("")}d();function u(e){return`<a href="${e[0].url}" target="_blank"> <img src="/src/images/mask_group_corrected.png" alt="Link Icon" class="link-icon amazon" width="32" height="11"></a>
    <a href="${e[1].url}" target="_blank"> <img src="/src/images/image_1.png" alt="Link Icon" class="link-icon apple-book" width="16" height="16"></a>
    <a href="${e[2].url}" target="_blank"> <img src="/src/images/Icon1.png" alt="Link Icon" class="link-icon book-shop" width="16" height="16"></a>`}console.log(r(c));if(localStorage.getItem("shoppingList")===null){const e=document.querySelector(".hidden-shop-list"),t=document.querySelector(".cart");e.classList.remove("is-hidden"),t.classList.add("cart")}else{const e=r(c);g.insertAdjacentHTML("beforeend",e)}let l=document.querySelectorAll(".js-remove");function m(e){let t=e.target.closest(".js-product");if(t&&(t.remove(),localStorage.removeItem("shoppingList"),console.log("Дані видалені із локального сховища."),h(),!document.querySelector(".shopping-list-item"))){const o=document.querySelector(".hidden-shop-list"),i=document.querySelector(".cart");o.classList.remove("is-hidden"),i.classList.add("cart")}}function h(){let e=[];l.forEach(function(t){let o=t.getAttribute("data-id");e.push(o)}),localStorage.setItem("selectedProducts",JSON.stringify(e)),console.log(localStorage),e.length===0&&document.querySelector(".message").classList.remove("is-hidden")}window.addEventListener("beforeunload",function(){localStorage.setItem(n)});l.forEach(function(e){e.addEventListener("click",m)});function p(e,t){const o=e.split(" ");return o.length<=t?e:o.slice(0,t).join(" ")+" ..."}
