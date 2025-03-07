document.getElementById("searchBtn").addEventListener("click", getWeather);


async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "8d5668285aa31097b7ce5acfe52ee8e4"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    if (city === "") {
        alert("Please enter a city name");
        return;
    }


    try {
        const response = await fetch(url);
        const data = await response.json();


        if (data.cod === "404") {
            document.getElementById("weatherInfo").innerHTML = "City not found!";
            return;
        }
	//Remeove the stars and replace it with the event caller to call the Id
        document.getElementById("weatherInfo").innerHTML = ` It is ${data.main.temp}°C in: 
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
