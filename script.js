
var button = document.querySelector(".button")
var input = document.querySelector(".input")
var city = document.querySelector(".city")
var temperature = document.querySelector(".temperature")
var description = document.querySelector(".description")
var minmax = document.querySelector(".minmax")


button.addEventListener("click", function(){
    var val = input.value
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&lang=no&appid=085e34d350a0df7abb49eca24ab28e37`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        city.innerHTML = data.name
        temperature.innerHTML = (data.main.temp + "C°")
        description.innerHTML = data.weather[0].description
        minmax.innerHTML = (data.main.temp_max + "C° / " + data.main.temp_min + "C°")

        console.log(data)
    })
})


