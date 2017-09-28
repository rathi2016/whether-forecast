import axios from 'axios';
import config from './config'

var API_key = config.MY_KEY;
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?APPID=${API_key}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`

  const request = axios.get(url)
  console.log(axios.defaults.headers.common);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', "http://localhost");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
// };
// App.configure(function() {
//     App.use(allowCrossDomain);
// });
