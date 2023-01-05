const headerMenu = document.querySelector('.header-list');
const headerMenuBtn = document.querySelector('.header-list--toggler');

headerMenuBtn.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
});

onscroll = () => {
    headerMenu.classList.remove('active');
}