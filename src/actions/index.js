import axios from 'axios';
import config from './config'

var API_key = config.MY_KEY;

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_key}`;

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)
  return {
    type: 'FETCH_WEATHER',
    payload: request
  };
}
