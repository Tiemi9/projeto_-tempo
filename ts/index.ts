const form = document.querySelector('#form')
const input: HTMLInputElement | null = document.querySelector('#location-form')
const data = document.querySelector('#weather-data')
const button = document.querySelector('#location-button')

form?.addEventListener('submit', async (event) => {
    event.preventDefault()

    if(!input || !data) return

    const local = input.value

    if (local.length <= 3) {
        alert('O local deve ter, pelo menos, 4 caractéres! 😉')
        input.value = ''
    }  else {
        input.value = ''
    }
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=bc75b3c4d0b39b75894a9c59513e59f4&lang=pt_br&units=metric`)

    const localData = await response.json()
  
    const infos = {
        temperature: Math.round(localData.main.temp),
        local: localData.name,
        icon: localData.weather[0].icon
    }

    data.innerHTML = `
        <div class="weather-info">
            <p>${infos.local}</p>
            <span>${infos.temperature}°C</span>
        </div>
    
        <img src="https://openweathermap.org/img/wn/${infos.icon}@2x.png" />
    `

    } catch (error) {
        console.log('Erro ao obter dados', error)
    }
})

input?.addEventListener('focus', (event) => {
    input.setAttribute('placeholder', '')  
})

input?.addEventListener('blur', (event) => {
    input.setAttribute('placeholder', 'Insira sua localização...')  
})

button?.addEventListener('click', (event) => {
   
})