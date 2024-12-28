"use strict";
const form = document.querySelector('#form');
const input = document.querySelector('#location-form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => {
    event.preventDefault();
});
input === null || input === void 0 ? void 0 : input.addEventListener('focus', (event) => {
    input.setAttribute('placeholder', '');
});
input === null || input === void 0 ? void 0 : input.addEventListener('blur', (event) => {
    input.setAttribute('placeholder', 'Insira sua localização...');
});
