const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');


openMenuBtn.addEventListener('click', toggleOpenModal);
closeMenuBtn.addEventListener('click', toggleCloseModal);

function toggleOpenModal() {
  if (mobileMenu.classList.contains('is-hidden')) {
      mobileMenu.classList.remove('is-hidden');
/*       openMenuBtn.style.display = "none";
      closeMenuBtn.style.display = "block"; */
      closeMenuBtn.classList.remove('is-hidden');
      openMenuBtn.classList.add('is-hidden')
    return;
  } 
}
function toggleCloseModal() {
    mobileMenu.classList.add('is-hidden');
    closeMenuBtn.classList.add('is-hidden');
    openMenuBtn.classList.remove('is-hidden')
}
  