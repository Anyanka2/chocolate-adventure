(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();const t={cards:document.getElementsByClassName("slider-list-element"),btns:document.querySelectorAll("[products-slider-btn]"),slider:document.getElementsByClassName("slider-list")};for(let e=4;e<t.cards.length;e++)t.cards[e].style.opacity=0,t.cards[e].style.pointerEvents="none";let a=0,l=0;for(let e=0;e<t.btns.length;e++)t.btns[e].addEventListener("click",function(){l=e,f()});function i(){for(let e=0;e<t.cards.length;e++)t.cards[e].style.opacity=1,t.cards[e].style.pointerEvents="auto",t.cards[e].style.transform="translateX(0px)",e>3&&(t.cards[e].style.opacity=0,t.cards[e].style.pointerEvents="none")}function u(){for(let e=0;e<t.cards.length;e++)t.cards[e].style.opacity=1,t.cards[e].style.pointerEvents="auto",t.cards[e].style.transform=`translateX(${l*a}px)`,(e<l||e>l+3)&&(t.cards[e].style.opacity=0,t.cards[e].style.pointerEvents="none")}function f(){switch(document.documentElement.clientWidth<768?a=-359:a=-288,l){case 0:i();break;default:u()}for(let e=0;e<t.btns.length;e++)t.btns[e].classList.remove("active-slider-btn");t.btns[l].classList.add("active-slider-btn")}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s);function s(){e.modal.classList.toggle("is-hidden")}})();(()=>{const e={openModalBtns:document.querySelectorAll("[data-modal-open-buy]"),closeModalBtn:document.querySelector("[data-modal-close-buy]"),modal:document.querySelector("[data-moda-buy]")};e.openModalBtns.forEach(c),e.closeModalBtn.addEventListener("click",s);function s(){e.modal.classList.toggle("is-hidden")}function c(r){r.addEventListener("click",s)}})();