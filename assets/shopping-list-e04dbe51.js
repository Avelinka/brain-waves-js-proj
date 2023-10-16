import{c as P}from"./swither-theme-a30e8604.js";const f=document.querySelector(".cart"),e=document.querySelector(".js-list"),n="shoping-list",o=JSON.parse(localStorage.getItem(n))||[];function g(t){const A={title:"AmazonMarketplace",img:new URL("data:image/png;base64,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",self.location).href,img2x:new URL("/brain-waves-js-proj/assets/mask_group_corrected@2x-f3848a5b.png",self.location).href},s={title:"Book",img:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN/SURBVHgB7VdJjExBGP7+6uluYmgkthmS0YdhLpYgHIZEuFhCiHBxJXFzEOHiKBFbuFhCxBEniUQcjEhExBJMIhwsI5a2RmaEWbpf/f5+vVW9rvf6dTJu8yeVrqr31V9f/VtVA2NSEor6yOfTnV6y0E2gaQpIaY7Gm6IIrDXyDP6c0N4j2oWXaIYEX8Q8RvKKdBdi9OQtjeTX0B70oREJPof5rJIPQJQpz8DNNWw+EpcnxlLaNdJrIlrqllDqpqzL+GvdPBvMR+KSovYaM+YT1XZQJqJwNrUVmjqkodg48BvW2DHmkLH8dnrn0uvMfS0SxLSaWYDlhsBvWINjjJBxqa82mPta7hCWWXKZuWUikN0Iamkt2gvc3wd8vC2slY1rXwWamAUSKfDfHPDtMfAnB4eH2kJJKKY0cwC/7ABo0V4gPcnQIfL1CfStncDAe6B1NtTaC8DsVTZmuB/88Ai495Sc0FRMrda+5kB7MjZ8SR2bQcsPWQSqMmMJaO0lwYmSTdctAlVJZ0ArD4Oy26yYUcwq1BLggHknzEGUUNsKcKYLmNoVicO4GaVYqIi2XW6T8IqaDUDANU6ZsqAxhv14q0VbIOzswKxEb0V0jGpALY0QJb26Vhg4cDpbg2+mJi3BMYoWw3ZBlCWgFWplluNv0CyJaEuYNGOW5dgkjHGgvtS7o2yE0uI4loiJqViCAoTgsAQb2UEajfXHwFRLtt8v8ohKUU7YlS2OqWORgBUTHBmYdXXC6A9JCf7xxvcntS9yY7w8+KdgBvtB0+cB4yeXiVJdgQolIbcoWyW+mCCfnkPfOAjOPRVFhdLkuMlQy3dDrdlftZbuOQF+cAY89AuVoKb2xVBbTjeXHfImLNe1Eki/kDvh0WU5YcFYKN//9kPfOSrdhG8Jfesw9L2TZUgtu/jDM3inusUiGcttHBUTYonf1Y2KMvDD/Iqg6J5jQEc3+NlVub4TcIuk4+Bva70E83AoCU9TLgHrzHWxSdXT+DSA13f90l3JJK7D1PQYFehdgKbBiNUNjni2uZ5u/s1b/4SDS09lXlb0uA5WYU4j+2a+kgTpxP+TvtTRL3MRZgn/DtV6OzQX/EAa7ebxgBTD9UFWzuTlAzM78sMoPiKzCBNXwEQK97KiHenjuVcuVeHL9s7q8pRaxqzbpJImm/0bKPEyIhn8nRN837X5mATlH/NXv+oaRoVuAAAAAElFTkSuQmCC",self.location).href,img2x:new URL("data:image/png;base64,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",self.location).href},i=new URL("/brain-waves-js-proj/assets/sprite-a598f328.svg#icon-trash",self.location).href;return t.map(({author:a,book_image:v,buy_links:p,title:l,description:c,list_name:B})=>`
        <li data-id="${l}" class="js-product shopping-list-item">
          <div class="shop-list-item-box">
            <div class="shop-list-img-wrap">
              <img src="${v}" alt="${l}" class="shop-list-img"/> 
            </div>
            <div class="shop-item-div">
              <h2 class="shopping-list-title">${l}</h2>
              <p class="shop-list-category">${B}</p>
              <p class="shop-list-text">${c}</p>
              <h2 class="shopping-list-author">${a}</h2>
            </div>
            <button type="button" class="js-remove shop-list-trash-btn" data-id="${l}">
              <svg class="bag-icon" width="16" height="16">
                <use href=${i}></use>
              </svg>
            </button>
            <div class="shop-list-amazon-wrap">
            <a
              href="${p[0].url}"
              target="blank"
              ><img
              alt="${A.title}"
              class="marketplace-img-modal shop-list-item-link shop-list-amazon"
              srcset="
              ${A.img}, ${A.img2x} 2x
              "/>
            </a>
            </div>
            <div class="shop-list-book-wrap">
            <a
              href="${p[1].url}"
              target="blank"
              ><img
              alt="${s.title}"
              class="marketplace-img-modal shop-list-item-link shop-list-book"
              srcset="
              ${s.img}, ${s.img2x} 2x
              "/>
            </a>
            </div>
          </div>
        </li>`).join("")}P();function d(){if(console.log(o),o.length===0)f.style.display="flex",e.style.display="none",e.innerHTML="";else{f.style.display="none",e.style.display="block";const t=g(o);e.innerHTML=t}}d();let E=document.querySelectorAll(".js-remove");function r(t){let A=t.target.closest(".js-product"),s=A.getAttribute(".data-id");if(A){A.remove();const i=o.findIndex(a=>a.title===s);o.splice(i,1),u(),d()}}function u(){let t=o.map(A=>A.title);localStorage.setItem(n,JSON.stringify(o)),t.length===0&&(f.style.display="flex",e.style.display="none")}window.addEventListener("beforeunload",function(){localStorage.setItem(n)});E.forEach(function(t){t.addEventListener("click",r)});
