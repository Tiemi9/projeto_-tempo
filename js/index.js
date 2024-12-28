"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector('#form');
const input = document.querySelector('#location-form');
const data = document.querySelector('#weather-data');
const button = document.querySelector('#location-button');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input || !data)
        return;
    const local = input.value;
    if (local.length <= 3) {
        alert('O local deve ter, pelo menos, 4 caractéres! 😉');
        input.value = '';
    }
    else {
        input.value = '';
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=bc75b3c4d0b39b75894a9c59513e59f4&lang=pt_br&units=metric`);
        const localData = yield response.json();
        const infos = {
            temperature: Math.round(localData.main.temp),
            local: localData.name,
            icon: localData.weather[0].icon
        };
        data.innerHTML = `
        <div class="weather-info">
            <p>${infos.local}</p>
            <span>${infos.temperature}°C</span>
        </div>
    
        <img src="https://openweathermap.org/img/wn/${infos.icon}@2x.png" />
    `;
    }
    catch (error) {
        console.log('Erro ao obter dados', error);
    }
}));
input === null || input === void 0 ? void 0 : input.addEventListener('focus', (event) => {
    input.setAttribute('placeholder', '');
});
input === null || input === void 0 ? void 0 : input.addEventListener('blur', (event) => {
    input.setAttribute('placeholder', 'Insira sua localização...');
});
button === null || button === void 0 ? void 0 : button.addEventListener('click', (event) => {
});
