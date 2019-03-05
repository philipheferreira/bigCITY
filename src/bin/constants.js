'use_strict'

const advisor_token = '5f7dd653e46e4ba331cffde3320bfca6'

const here_token = {
    api_code: '9v2BkviRwi9Ot26kp2IysQ', // ETCEiffRX0s-W-ZJkfASfg
    api_id: 'devportal-demo-20180625' //'jDdiqYuzuot8eNwiLIrB'
}

const tomtom_token = 'HkbELEk8xZzW8I3ASD2x04JYG4FymkJ1'

const url = {}

url.current_weather      = 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/7704/current?token='+advisor_token;
url.weather_forecast_72h = 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/7704/hours/72?token='+advisor_token;
url.weather_forecast_15d = 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/7704/days/15?token='+advisor_token;

url.route_a_b = `https://route.api.here.com/routing/7.2/calculateroute.json?waypoint0=52.5160%2C13.3779&waypoint1=52.5206,13.3862&mode=fastest%3Bcar%3Btraffic%3Aenabled&app_id=${here_token.api_id}&app_code=${here_token.api_code}`;

url.flow_segment = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?point=52.41072%2C4.84239&unit=KMPH&key=${tomtom_token}`

module.exports = url;