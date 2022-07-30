import axios from 'axios'

const URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = process.env.REACT_APP_API_KEY

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      appid: API_KEY,
    },
  })
  return data
}
