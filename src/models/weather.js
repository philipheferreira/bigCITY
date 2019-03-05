const mongoose = require('mongoose')
const Schema = mongoose.Schema()



const weather = new Schema({
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
    weather_forecast_72h: [{
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
    weather_forecast_25d: {
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
})

mongoose.module('weather', weather);

module.exports = weather;