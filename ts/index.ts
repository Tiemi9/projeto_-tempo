const form = document.querySelector('#form')
const input: HTMLInputElement | null = document.querySelector('#location-form')

form?.addEventListener('submit', (event) => {
    event.preventDefault()

    
})

input?.addEventListener('focus', (event) => {
    input.setAttribute('placeholder', '')  
    
})
input?.addEventListener('blur', (event) => {
    input.setAttribute('placeholder', 'Insira sua localização...')  
    
})
