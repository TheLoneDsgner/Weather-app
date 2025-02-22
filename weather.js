// const weatherApp = document.getElementById('weather-app')
// const weatherForm = document.getElementById('weather-form')
// const inputContainer = document.getElementById('input-group')
// const userInput = document.getElementById('city')

// const errorDisplay = document.getElementById('error-display')

// const getButton = document.getElementById('get-weather');

// // API and api key
// const apiKey = "a9f60d823ba16d18aecc376ad1d6f671"
// // const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

// const card = document.querySelector('.card')



// fetch("https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}").then((response)=>{
//     response.json()
// }).then((data)=>{
//     data

//     console.log(data)
// }).catch


// fetch request

// fetch("https://api.github.com/users").then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// })


//post request
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method : "POST",
//     headers : {"Content-Type": "application/json"},
//     body : JSON.stringify(({fullname: "James David"}))
// }).then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// })

//fetch request using async
async function getPosts() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let refinedData = await response.json()

        console.log(refinedData)
    }catch{

    }
}

getPosts()