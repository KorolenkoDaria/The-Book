!function(){var e=document.querySelector(".js-menu-container"),d=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu");d.addEventListener("click",(function(){if(e.classList.contains("is-hidden"))return e.classList.remove("is-hidden"),t.classList.remove("is-hidden"),void d.classList.add("is-hidden")})),t.addEventListener("click",(function(){e.classList.add("is-hidden"),t.classList.add("is-hidden"),d.classList.remove("is-hidden")}));var n=document.querySelector(".header-toggle-bg"),s=document.querySelector("body");n.addEventListener("click",(function(){s.classList.contains("body-dark-theme")?s.classList.remove("body-dark-theme"):s.classList.add("body-dark-theme")})),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function d(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",d),e.closeModalBtn.addEventListener("click",d)}()}();
//# sourceMappingURL=index.35b1e7f4.js.map