// let request = new XMLHttpRequest()
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
// request.send()

// request.onreadystatechange = function(){
//     if(request.readyState === 4 && request.status === 200){
//         let post = JSON.parse(request.responseText)

//         post.forEach()

//         console.log(post)
//     }
// }

//My weather app

// const weatherForm = document.querySelector('weather-form');
// const cityInput = document.querySelector('city-input');
// const dataCard = document.getElementById('data-card');

// const apiKey = document.querySelector('a9f60d823ba16d18aecc376ad1d6f671')

// const getButton = document.getElementById('get-weather');

// weatherForm.addEventListener('submit', event => {
//     event.preventDefault();

//     const userInputCity = cityInput.value;

//     if(city){

//     }
//     else{
//         displayError('Please enter a city')
//     }
// })

// async function getWeatherData(city) {
    
// }

// function displayWeatherInfo(data){

// }

// function displayError(message){
//     const erorrDisplay = document.createElement("p");
//     erorrDisplay.textContent = message;
//     erorrDisplay.classList.add("error-display");

//     dataCard.textContent = "";
//     dataCard.style.display = "flex";
// }



const weatherApp = document.getElementById('weather-app')
const weatherForm = document.getElementById('weather-form')
const inputContainer = document.getElementById('input-group')
const userInput = document.getElementById('city')

const errorDisplay = document.getElementById('error-display')

const getButton = document.getElementById('get-weather');
const apiKey = "a9f60d823ba16d18aecc376ad1d6f671"

const card = document.querySelector('.card')


//my weather app XMHL fetch method
// weatherForm.addEventListener('submit', function(event){
//     event.preventDefault()

//     let city = userInput.value

//     if(city){

//     }
//     else{
//         displayError('Please enter a city')
//     }


//     let KEY = apiKey
//     let endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`

//     let request = new XMLHttpRequest()
//     request.open("GET", endPoint, true)
//     request.send()

//     request.onreadystatechange = function(){
//         if(request.readyState === 4 && request.status === 200){
//             let weatherData = JSON.parse(request.responseText)
            
//             displayWeatherInfo(weatherData)
//         }

//         weatherForm.reset()
//     }
// })



//my weather app fetch method



weatherForm.addEventListener('submit', async function(event){
    event.preventDefault()

    let city = userInput.value
    let KEY = apiKey
    let endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`

    async function getWeather(){
        try{
            let response = await fetch(endPoint)
            let refinedData = await response.json()

            displayWeatherInfo(refinedData)
    
        }catch{
            displayError("Please enter a city")
        }
    }
    getWeather()
})


//display weather info
function displayWeatherInfo(data){

    const {
        name : city,
        main: {temp, humidity},
        weather: [{description, id}]
    } = data

    //data display
    card.style.display = "flex";
    weatherApp.append(card)

    //data container
    const dataContainer = document.createElement('Div')
    dataContainer.classList.add('weather-data')
    card.append(dataContainer)

    //city temp and name
    const cityInfo = document.createElement('Div')
    cityInfo.classList.add('city-and-temp')
    dataContainer.append(cityInfo)

    const cityName = document.createElement('p')
    cityName.textContent = city
    cityName.classList.add('city-display')
    cityInfo.append(cityName)

    const cityTemp = document.createElement('Div')
    cityTemp.classList.add('display-temp')
    cityInfo.append(cityTemp)

    const tempNumber = document.createElement('h2')
    tempNumber.classList.add('temp-display')
    tempNumber.textContent = `${(temp - 273.15).toFixed(1)}`
    cityTemp.append(tempNumber)

    const tempSymbol = document.createElement('h2')
    let symbol = "°C"
    tempSymbol.textContent = symbol
    tempSymbol.classList.add('temp-display-c')
    cityTemp.append(tempSymbol)

    //humidity container
    const humidityContainer = document.createElement('Div')
    humidityContainer.classList.add("hum-and-display-container")
    dataContainer.append(humidityContainer)

    const humidityDisplay = document.createElement('p')
    // let humidityLabel = "Humidity: 5"
    humidityDisplay.textContent = `Humidity: ${humidity}%`
    humidityDisplay.classList.add('humidity-display')
    humidityContainer.append(humidityDisplay)

    //icon and description
    const iconAndDesc = document.createElement('Div')
    iconAndDesc.classList.add('icon-and-display-wrapper')
    humidityDisplay.append(iconAndDesc)

    const weatherIcon = document.createElement('p')
    weatherIcon.textContent = getWeatherEmoji(id)
    iconAndDesc.append(weatherIcon)

    const weatherDescription = document.createElement('p')
    weatherDescription.textContent = description
    iconAndDesc.append(weatherDescription)        
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️"
        
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️"

        case (weatherId >= 500 && weatherId < 600):
            return "⛈️"

        case (weatherId >= 600 && weatherId < 700):
            return "❄️"

        case (weatherId >= 700 && weatherId < 800):
            return "🌤️"

        case (weatherId === 800):
            return "☀️"

        case (weatherId >= 801 && weatherId < 810):
            return "☁️"

        default:
            return "👨‍💻"
    }
}

function displayError(message){
    let errorMessage = document.createElement("p")
    errorMessage.textContent = message
    errorMessage.classList.add('error-display')

    errorDisplay.style.display = "flex"
    inputContainer.append(errorMessage)
}


// getButton.addEventListener('click', function(){
//     const city = "London"
//     const API_KEY = "a9f60d823ba16d18aecc376ad1d6f671"
//     const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

//     let request = new XMLHttpRequest()
//     request.open("GET", endPoint, true)
//     request.send()

//     request.onreadystatechange = function(){
//         if(request.readyState === 4 && request.status === 200){
//             let cityWeather = JSON.parse(request.responseText)
    
//             console.log(cityWeather)
//         }
//     }
// })