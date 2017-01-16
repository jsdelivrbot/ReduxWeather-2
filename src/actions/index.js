import axios from 'axios'
const API_KEY = '738d0312110e645a3e2d2cdb82dadeee';
// const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?&mode=xml&appid='+API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},br`
  const request = axios.get(url);

  console.log('REQUEST:', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
