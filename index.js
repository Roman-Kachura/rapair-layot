const mapBtn = document.querySelector('.map-button');
const mapFrame = document.querySelector('.map-iframe');
const callBtn = document.querySelectorAll('.call-btn');
const closeBtn = document.querySelector('.close-btn');
const marker = document.querySelector('.marker');
const modal = document.querySelector('.modal');
const successBtn = document.querySelector('.success-btn');
const callbackBlock = document.querySelector('.callback');
const headerMobile = document.querySelector('.header-mobile');
const burgerBtn = document.querySelector('.burger');
const mainBlock = document.querySelector('.main');
const menuMobile = document.querySelector('.menu-mobile');
const mapShow = () => mapFrame.classList.contains('hidden') ? mapFrame.classList.remove('hidden') : mapFrame.classList.add('hidden');
mapBtn.addEventListener('click', mapShow);
callBtn.forEach(b => {
    b.addEventListener('click', () => {
        modal.classList.remove('hidden');
        callbackBlock.classList.remove('hidden');
        successBlock.classList.add('hidden');
    });
})
closeBtn.addEventListener('click', () => modal.classList.add('hidden'))
checkbox.addEventListener('change', () => checkbox.checked ? marker.classList.add('active') : marker.classList.remove('active'));
successBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    callbackBlock.classList.remove('hidden');
});
burgerBtn.addEventListener('click', () => {
    if (headerMobile.classList.contains('active')) {
        headerMobile.classList.remove('active');
        menuMobile.classList.remove('active');
        mainBlock.classList.remove('hidden');
    } else {
        headerMobile.classList.add('active');
        menuMobile.classList.add('active');
        mainBlock.classList.add('hidden');
    }
});
