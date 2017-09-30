import axios from 'axios';
import config from './config'

var API_key = config.MY_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_key}`;
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`
//  library used to make ajax request just like jquery
  const request = axios.get(url);



  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
