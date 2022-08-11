import { useEffect } from 'react'
import { useState } from 'react'
import { fetchWeather } from '../api/fetchWeather'
import { RiCloudy2Line, RiSunLine } from 'react-icons/ri'
import { BsCloudRain } from 'react-icons/bs'

function Weather() {
  //states
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

  //handle city input search
  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query)
      setWeather(data)
      //reset query input
      setQuery('')
    }
  }

  return (
    <>
      <div className="card col-md-12 col-sm-6 text-center weather-card mb-3 ">
        <div className="card-body ">
          <div className="weather-container text-center ">
            {weather.main && (
              <div className="city">
                <p className="lead mb-0 city-name">
                  <span>{weather.name}, </span>
                  {weather.sys.country}
                </p>
                <div className="m-0 p-2">
                  {weather.weather[0].main === 'Clear' ? (
                    <RiSunLine className="weather-icon sunny" />
                  ) : weather.weather[0].main === 'Clouds' ? (
                    <RiCloudy2Line className="weather-icon cloudy" />
                  ) : weather.weather[0].main === 'Rain' ? (
                    <BsCloudRain className="weather-icon rainy" />
                  ) : (
                    <p>{weather.weather[0].main}</p>
                  )}
                  <p className="m-0 text-capitalize fw-light weather-description">
                    <small>{weather.weather[0].description}</small>
                  </p>
                </div>
                <p className="lead temp mb-0">
                  {Math.round(weather.main.temp)}
                  &deg;C
                </p>

                <div className="info">
                  <div className="d-flex justify-content-center fw-light">
                    <p className="max m-1">
                      H {Math.round(weather.main.temp_max)}&deg;C
                    </p>
                    <p className=" min m-1">
                      L {Math.round(weather.main.temp_min)}&deg;C
                    </p>
                  </div>
                  {/* <small>Humidity {weather.main.humidity}%</small>
                <p className="m-0">
                  <small>
                    Feels like {Math.round(weather.main.feels_like)}&deg;C
                  </small> */}
                  {/* </p> */}
                </div>
              </div>
            )}
            <div className="mb-3">
              <input
                type="text"
                className="search-weather text-center mx-auto mb-3 "
                placeholder="Enter city"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather
