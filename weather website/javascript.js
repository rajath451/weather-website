const apikey = "fcd3367a1ffc322f0d0a35c54013a962";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const  response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".Humidity").innerHTML = data.main.humidity  +  " %";  
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if(data.weather[0].main == "Clouds"){
        weathericon.src = "cloud.png";
    }
    else if(data.weather[0].main == "clear"){
        weathericon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "snow.png";
    }
    document.querySelector(".weather").style.display ="block";
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
