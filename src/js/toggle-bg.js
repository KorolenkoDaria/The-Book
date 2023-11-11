const toggleEl = document.querySelector('.header-toggle-bg')
const bodyEl = document.querySelector('body');

toggleEl.addEventListener('click', toggleClass);

function toggleClass() {
    if(!bodyEl.classList.contains('body-dark-theme')){
        bodyEl.classList.add('body-dark-theme');
    } else {
        bodyEl.classList.remove('body-dark-theme');
    }
}