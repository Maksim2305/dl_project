"use strict";function n(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r=document.querySelector(".slider__wrapper"),o=document.querySelector(".slider__inner-wrapper"),i=document.querySelector(".slider__pagination"),c=document.querySelector(".slider__button_back"),l=document.querySelector(".slider__button_next"),u=document.querySelectorAll(".slider__slide"),a=0,d=o.childElementCount-1,f=null,m=0;v(c);var y=[];function e(){a=r.offsetWidth;var e,t=n(u);try{for(t.s();!(e=t.n()).done;)e.value.style.width="".concat(a,"px")}catch(e){t.e(e)}finally{t.f()}}function v(e,t){1<arguments.length&&void 0!==t&&t?e.removeAttribute("disabled"):e.setAttribute("disabled","")}function _(e,t){t=!(1<arguments.length&&void 0!==t)||t;e<0||d<e||(clearTimeout(f),t&&(o.style.transition="transform 500ms",f=setTimeout(function(){o.style.transition=""},500)),v(l,!0),v(c,!0),0===e&&v(c),e===d&&v(l),o.style.transform="translateX(".concat(e*a*-1,"px)"),y[m].classList.remove("slider_dot_active"),y[m=e].classList.add("slider_dot_active"))}!function(){i.innerHTML="";for(var e=0;e<d+1;e++)!function(e){var t=document.createElement("button");t.classList.add("slider_dot"),e===m&&t.classList.add("slider_dot_active"),y.push(t),t.addEventListener("click",function(){_(e)}),i.insertAdjacentElement("beforeend",t)}(e)}(),e(),l.addEventListener("click",function(){_(m+1)}),c.addEventListener("click",function(){_(m-1)}),window.addEventListener("resize",function(){e(),_(m,!1)});var t=document.querySelector("html"),p=document.querySelector(".sign__button-close"),b=document.querySelector(".register__button-close"),g=document.querySelector(".header__list_link-sign"),h=document.querySelector(".header__list_link-register");g.addEventListener("click",function(){t.classList.add("sign-open"),body.classList.add("lock"),popupButtonClose.focus()}),h.addEventListener("click",function(){t.classList.add("register-open"),popupButtonClose.focus()}),p.addEventListener("click",function(){t.classList.remove("sign-open")}),b.addEventListener("click",function(){t.classList.remove("register-open")}),console.log(g);