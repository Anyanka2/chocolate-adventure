(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function d(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(n){if(n.ep)return;n.ep=!0;const t=d(n);fetch(n.href,t)}})();const l={cards:document.getElementsByClassName("slider-list-element"),btns:document.getElementsByClassName("products-slider-btn")};for(let e=4;e<l.cards.length;e++)l.cards[e].style.opacity=0,l.cards[e].style.pointerEvents="none";let u=0,a=0;for(let e=0;e<l.btns.length;e++)l.btns[e].addEventListener("click",function(){a=e,h()});function y(){for(let e=0;e<l.cards.length;e++)l.cards[e].style.opacity=1,l.cards[e].style.pointerEvents="auto",l.cards[e].style.transform="translateX(0px)",e>3&&(l.cards[e].style.opacity=0,l.cards[e].style.pointerEvents="none")}function f(){for(let e=0;e<l.cards.length;e++)l.cards[e].style.opacity=1,l.cards[e].style.pointerEvents="auto",l.cards[e].style.transform=`translateX(${a*u}px)`,(e<a||e>a+3)&&(l.cards[e].style.opacity=0,l.cards[e].style.pointerEvents="none")}function h(){switch(document.documentElement.clientWidth<375?u=-332:document.documentElement.clientWidth<768?u=-359:u=-288,a){case 0:y();break;default:f()}for(let e=0;e<l.btns.length;e++)l.btns[e].classList.remove("active-slider-btn");l.btns[a].classList.add("active-slider-btn")}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}})();(()=>{const e={openBuyModalBtns:document.querySelectorAll("[data-modal-open-buy]"),closeBuyModalBtn:document.querySelector("[data-modal-close-buy]"),closeModalThankBtn:document.querySelector("[data-modal-close-thankyou]"),submitBuyBtn:document.querySelector("[hero-button-buy-submit]"),buyModal:document.querySelector("[data-moda-buy]"),thankModal:document.querySelector("[top-sellers-thankyou]")};e.openBuyModalBtns.forEach(n),e.closeBuyModalBtn.addEventListener("click",o),e.closeModalThankBtn.addEventListener("click",c),e.submitBuyBtn.addEventListener("click",d);function o(){e.buyModal.classList.toggle("is-hidden")}function d(){o(),c()}function c(){e.thankModal.classList.toggle("is-hidden")}function n(t){t.addEventListener("click",o)}})();(()=>{const e={openRewModalBtns:document.querySelectorAll("[data-modal-open-rewiews]"),closeRewModalBtn:document.querySelector("[data-modal-close-rewiews]"),closeModalRewThankBtn:document.querySelector("[data-modal-close-rewiews-thankyou]"),sendRewBtn:document.querySelector("[button-rewiews-send]"),rewModal:document.querySelector("[data-modal-rewiews]"),rewThankModal:document.querySelector("[rewiews-thankyou]")};e.openRewModalBtns.forEach(n),e.closeRewModalBtn.addEventListener("click",o),e.closeModalRewThankBtn.addEventListener("click",c),e.sendRewBtn.addEventListener("click",d);function o(){e.rewModal.classList.toggle("is-hidden")}function d(){o(),c()}function c(){e.rewThankModal.classList.toggle("is-hidden")}function n(t){t.addEventListener("click",o)}})();(()=>{document.querySelector(".how-btn").addEventListener("click",o);function o(){let d=document.querySelector(".video-container"),c=document.createElement("iframe");c.setAttribute("src","https://www.youtube.com/embed/xPe1jMuX32s"),c.setAttribute("allowfullscreen",""),d.innerHTML="",d.appendChild(c)}})();const s={cards:document.getElementsByClassName("rewiews-list-item"),btns:document.getElementsByClassName("rewiew-slider-btn")};for(let e=4;e<s.cards.length;e++)s.cards[e].style.opacity=0,s.cards[e].style.pointerEvents="none";let m=0,r=0;for(let e=0;e<s.btns.length;e++)s.btns[e].addEventListener("click",function(){r=e,g()});function p(){for(let e=0;e<s.cards.length;e++)s.cards[e].style.opacity=1,s.cards[e].style.pointerEvents="auto",s.cards[e].style.transform="translateX(0px)",e>3&&(s.cards[e].style.opacity=0,s.cards[e].style.pointerEvents="none")}function b(){for(let e=0;e<s.cards.length;e++)s.cards[e].style.opacity=1,s.cards[e].style.pointerEvents="auto",s.cards[e].style.transform=`translateX(${r*m}px)`,(e<r||e>r+3)&&(s.cards[e].style.opacity=0,s.cards[e].style.pointerEvents="none")}function g(){switch(document.documentElement.clientWidth<768?m=-351:document.documentElement.clientWidth>=768&&document.documentElement.clientWidth<1200?m=-360:m=-388,r){case 0:p();break;default:b()}for(let e=0;e<s.btns.length;e++)s.btns[e].classList.remove("active-slider-btn");s.btns[r].classList.add("active-slider-btn")}(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),d=document.querySelector(".js-close-menu"),c=document.querySelectorAll(".mobile-header-link"),n=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");const i=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[i](document.body)};o.addEventListener("click",n),d.addEventListener("click",n);for(let t=0;t<c.length;t++)c[t].addEventListener("click",n);window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
