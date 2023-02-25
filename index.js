const mapBtn = document.querySelector('.map-button');
const mapFrame = document.querySelector('.map-iframe');
const callBtn = document.querySelector('.call-btn');
const closeBtn = document.querySelector('.close-btn');
const checkbox = document.querySelector('.checkbox');
const marker = document.querySelector('.marker');
const modal = document.querySelector('.modal');
const form = document.querySelector('.form');
const successBtn = document.querySelector('.success-btn');
const callbackBlock = document.querySelector('.callback');
const successBlock = document.querySelector('.success');
const headerMobile = document.querySelector('.header-mobile');
const burgerBtn = document.querySelector('.burger');
const mainBlock = document.querySelector('.main');
const menuMobile = document.querySelector('.menu-mobile');
const mapShow = () => mapFrame.classList.contains('hidden') ? mapFrame.classList.remove('hidden') : mapFrame.classList.add('hidden');
mapBtn.addEventListener('click', mapShow);
callBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    callbackBlock.classList.remove('hidden');
    successBlock.classList.add('hidden');
});
closeBtn.addEventListener('click', () => modal.classList.add('hidden'))
checkbox.addEventListener('change', () => checkbox.checked ? marker.classList.add('active') : marker.classList.remove('active'));
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (checkbox.checked) {
        alert(document.querySelector('#phone').value);
        callbackBlock.classList.add('hidden');
        successBlock.classList.remove('hidden');
    }
});
successBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    callbackBlock.classList.remove('hidden');
});
burgerBtn.addEventListener('click', () => {
    if(headerMobile.classList.contains('active')){
        headerMobile.classList.remove('active');
        menuMobile.classList.remove('active');
        mainBlock.classList.remove('hidden');
    } else{
        headerMobile.classList.add('active');
        menuMobile.classList.add('active');
        mainBlock.classList.add('hidden');
    }
});
