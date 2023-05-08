const apiKey = "84ead4f90af7670a5a8928e9f00ecef4"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")
const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")
const weatherContainer = document.querySelector("#weather-data")



const getWeatherData = async (city) => {
  const apiWeatherDataURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`

  const res = await fetch(apiWeatherDataURL)
  const data = await res.json()



  return data
}

const showWeatherData = async (city) => {
  const data = await getWeatherData(city)
  cityElement.innerText = data.name
  cityInput.value = ''
  tempElement.innerText = parseInt(data.main.temp)
  descElement.innerText = data.weather[0].description
  weatherIconElement.setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
  )
  humidityElement.innerText = `${data.main.humidity}%`
  windElement.innerText = `${data.wind.speed}km/h`

  weatherContainer.classList.remove("hide")


}


searchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const city = cityInput.value
  showWeatherData(city)

})

cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value

    showWeatherData(city)

  }
})

