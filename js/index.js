"use strict";
const form = document.querySelector('#form');
const input = document.querySelector('#location-form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => {
    event.preventDefault();
});
