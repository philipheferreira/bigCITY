const mongoose = require('mongoose')
const Schema = mongoose.Schema()



const iot = new Schema({
    state: String,
    name: String,
    country: String,
    geolocation: {
        lat: Number,
        lon: Number
    },
    data: {
        type: Date,
        dafault: Date.now()
    },
    temperature_sensor: Number,
    humidity_sensor: Number,
    current_wheater: {
        temperature: Number,
        wind_direction: String,
        wind_velocity: Number,
        humidity: Number,
        condition: String,
        pressure: Number,
        icon: String,
        sensation_current: Number,
    },
    predict_72h_wheater: [{
        date: Date,
        date_br: Date,
        rain: {
            precipitation: Number
        },
        wind: {
            velocity: Number,
            direction: String,
            directiondegrees: Number,
            gust: Number
        },
        temperature: {
            temperature: Number
        }
    }],
    predict_25d_wheater: {
        meteogram: String,
        predict: [{
            date: Date,
            date_br: Date,
            humidity: {
                min: Number,
                max: Number,
                dawn: {
                    min: Number,
                    max: Number
                },
                morning: {
                    min: Number,
                    max: Number
                },
                afternoon: {
                    min: Number,
                    max: Number
                },
                night: {
                    min: Number,
                    max: Number
                }
            }
        }],
        rain: {
            probability: Number,
            precipitation: Number
        },
        wind: {
            velocity_min: Number,
            velocity_max: Number,
            velocity_avg: Number,
            gust_max: Number,
            direction_degrees: Number,
            direction: String,
            dawn: {
                direction: String,
                direction_degrees: Number,
                gust_max: Number,
                velocity_max: Number
            },
            morning: {
                direction: String,
                direction_degrees: Number,
                gust_max: Number,
                velocity_max: Number
            },
            afternoon: {
                direction: String,
                direction_degrees: Number,
                gust_max: Number,
                velocity_max: Number
            },
            night: {
                direction: String,
                direction_degrees: Number,
                gust_max: Number,
                velocity_max: Number
            }
        },
        uv: {
            max: Number
        },
        thermal_sensation: {
            min: Number,
            max: Number
        },
        text_icon: {
            icon: {
                dawn: String,
                morning: String,
                afternoon: String,
                night: String,
                day: String
            },
            text: {
                pt: String,
                en: String,
                es: String,
                phrase: {
                    reduced: String,
                    morning: String,
                    afternoon: String,
                    night: String,
                    dawn: String
                }
            }
        },
        temperature: {
            min: Number,
            max: Number,
            dawn: {
                min: Number,
                max: Number
            },
            morning: {
                min: Number,
                max: Number
            },
            afternoon: {
                min: Number,
                max: Number
            },
            night: {
                min: Number,
                max: Number
            }
        }
    }
    //date: "2019-03-04 09:40:16"
})

// current
// {
//     "id": 7704,
//     "name": "Belém",
//     "state": "PA",
//     "country": "BR  ",
//     "data": {
//         "temperature": 26,
//         "wind_direction": "NE",
//         "wind_velocity": 9,
//         "humidity": 89,
//         "condition": "Muitas nuvens",
//         "pressure": 1014,
//         "icon": "2r",
//         "sensation": 28,
//         "date": "2019-03-04 09:40:16"
//     }
// }


// predict_72h
// "data": [
//     {
//         "date": "2019-03-04 00:00:00",
//         "date_br": "04/03/2019 00:00:00",
//         "rain": {
//             "precipitation": 1
//         },
//         "wind": {
//             "velocity": 8.2,
//             "direction": "NNE",
//             "directiondegrees": 34,
//             "gust": 21.7
//         },
//         "temperature": {
//             "temperature": 24
//         }
//     },
//     {
//         "date": "2019-03-04 01:00:00",
//         "date_br": "04/03/2019 01:00:00",
//         "rain": {
//             "precipitation": 1
//         },
//         "wind": {
//             "velocity": 7.7,
//             "direction": "NNE",
//             "directiondegrees": 33,
//             "gust": 21.7
//         },
//         "temperature": {
//             "temperature": 23
//         }
//     },
//     ....
//     ....

//


mongoose.module('iot', iot);

module.exports = iotSchema;