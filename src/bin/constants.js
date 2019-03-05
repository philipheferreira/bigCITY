'use_strict'
const advisor_token = '5f7dd653e46e4ba331cffde3320bfca6'

const url = {}

url.current_weather      = 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/7704/current?token='+advisor_token;
url.weather_forecast_72h = 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/7704/hours/72?token='+advisor_token;
url.weather_forecast_15d = 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/7704/days/15?token='+advisor_token;

url.


module.exports = url;