let apiKey = "04aa2c0003ef4b4e9dc124633260503";

async function getWeather() {
  let city = document.getElementById("city").value;
 let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  let response = await fetch(url);
  const data = await response.json();

  let cityName = data.location.name;
  let country = data.location.country;
  let temp = data.current.temp_c;
  let condition = data.current.condition.text;
  let wind = data.current.wind_kph;

  let resultDiv = document.getElementById("result");

  resultDiv.className = "";

  let weather = condition.toLowerCase();
  if(weather.includes("sun") || weather.includes("clear")){
    resultDiv.classList.add("sunny");
  } else if(weather.includes("cloud")){
    resultDiv.classList.add("cloudy");
  } else if(weather.includes("rain") || weather.includes("drizzle")){
    resultDiv.classList.add("rainy");
  } else if(weather.includes("snow")){
    resultDiv.classList.add("snowy");
  } else if(weather.includes("storm") || weather.includes("thunder")){
    resultDiv.classList.add("stormy");
  }

  resultDiv.innerHTML =
    `City: ${cityName} <br>
     Country: ${country} <br>
     Temperature: ${temp}°C <br>
     Weather: ${condition} <br>
     Wind: ${wind} km/h`;

  console.log(data);
}

