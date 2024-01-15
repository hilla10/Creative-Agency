const menu = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click',function() {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
})