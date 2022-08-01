import { useEffect } from 'react'
import { useState } from 'react'
import { fetchWeather } from '../api/fetchWeather'
import Clock from '../components/Clock'
import { TiWeatherPartlySunny } from 'react-icons/ti'

import PomoCounter from './PomoCouter'

function Weather() {
  //set searching query by
  const [query, setQuery] = useState('london')
  const [weather, setWeather] = useState({})

  const getWeather = async () => {
    try {
      const data = await fetchWeather(query)
      setWeather(data)
      setQuery('')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getWeather()
  }, [])

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query)
      console.log(data)
      setWeather(data)
      //reset query input
      setQuery('')
    }
  }

  return (
    <div className="card text-center mx-auto weather-card mb-5">
      <div className="card-body">
        <Clock />
        <div className="container weather-container mt-3 pt-3">
          {weather.main && (
            <div className="city">
              <p className="lead mb-0">
                {Math.round(weather.main.temp)}
                &deg;C
              </p>
              <p className="lead mb-0">
                <span>{weather.name}, </span>
                {weather.sys.country}
              </p>

              <div className="info">
                {/* <p>max : {Math.round(weather.main.temp_max)}&deg;C</p>
              <p>min : {Math.round(weather.main.temp_min)}&deg;C</p> */}
                <p className="m-0">
                  <small>Humidity : {weather.main.humidity}%</small>
                </p>
                <p className="m-0">
                  <small>
                    Feels like {Math.round(weather.main.feels_like)}&deg;C
                  </small>
                </p>
                <p className="m-0">
                  <small>{weather.weather[0].main}</small>
                </p>
                <p className="m-0 text-capitalize">
                  <small>{weather.weather[0].description}</small>
                </p>
              </div>
            </div>
          )}
          <input
            type="text"
            className="search-weather mb-3"
            placeholder="Enter city to check "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>

        <PomoCounter />
      </div>
    </div>
  )
}

export default Weather
