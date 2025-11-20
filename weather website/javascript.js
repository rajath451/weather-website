const apikey = "fcd3367a1ffc322f0d0a35c54013a962";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiurl + encodeURIComponent(city) + `&appid=${apikey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${data.main.temp}°C`;
        document.querySelector(".Humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

        const weatherMain = data.weather[0].main.toLowerCase();
        switch (weatherMain) {
            case "clouds":
                weathericon.src = "cloud.png";
                break;
            case "clear":
                weathericon.src = "clear.png";
                break;
            case "rain":
                weathericon.src = "rain.png";
                break;
            case "drizzle":
                weathericon.src = "drizzle.png";
                break;
            case "mist":
                weathericon.src = "mist.png";
                break;
            default:
                weathericon.src = "default.png"; // fallback image
        }

        document.querySelector(".weather").style.display = "block";
    } catch (error) {
        alert("Error: " + error.message);
        document.querySelector(".weather").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});
