const axios = require('axios')
const constrants = require('./../bin/constants')
exports.post = ('/', async (req, res, next) => {
    // recuperar dados 
    // tempo real
    try {
        // const sensor = req.body.sensor
        // const geolocation = req.body.geolocation
        const data = new Date()
        console.log(data)
        const wheater = await axios.get(constrants.current_weather)
        const name = wheater.data.name
        const state = wheater.data.state
        const country = wheater.data.country
        const current_weather = wheater.data.data

        console.log(current_wheater.data.data)
    } catch (e) {
        console.log({error: e})
        res.send({ error: e })
    }
    // sensor:{
    //     temperature: Number,
    //     humidity: Number,
    //     noise_pollution: Number,
    //     toxic_gases:{
    //         co: Number,
    //         smoke: Number,
    //         lta: Number,
    //     }
    // }

    // current_wheater = {
    //     temperature: Number,
    //     wind_direction: String,
    //     wind_velocity: Number,
    //     humidity: Number,
    //     condition: String,
    //     pressure: Number,
    //     icon: String,
    //     sensation_current: Number,
    // }
    // requisições de trafego
    // salvar no banco
    res.send({ ok: "ok" })
})