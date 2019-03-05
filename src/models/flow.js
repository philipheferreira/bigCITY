const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const flow = new Schema({
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
    flowSegmentData: {
        frc: String,
        currentSpeed: Number,
        freeFlowSpeed: Number,
        currentTravelTime: Number,
        freeFlowTravelTime: Number,
        confidence: Number,
    },
    route: [
        {
            waypoint: [
                {
                    linkId: String,
                    mappedPosition: {
                        latitude: Number,
                        longitude: Number
                    },
                    originalPosition: {
                        latitude: Number,
                        longitude: Number
                    },
                    type: String,
                    spot: Number,
                    sideOfStreet: String,
                    mappedRoadName: String,
                    label: String,
                    shapeIndex: Number
                }
            ],
            mode: {
                type: String,
                transportModes: [
                    String
                ],
                trafficMode: String,
                feature: [String]
            },
            leg: [
                {
                    start: {
                        linkId: String,
                        mappedPosition: {
                            latitude: Number,
                            longitude: Number
                        },
                        originalPosition: {
                            latitude: Number,
                            longitude: Number
                        },
                        type: String,
                        spot: Number,
                        sideOfStreet: String,
                        mappedRoadName: String,
                        label: String,
                        shapeIndex: Number
                    },
                    end: {
                        linkId: String,
                        mappedPosition: {
                            latitude: Number,
                            longitude: Number
                        },
                        originalPosition: {
                            latitude: Number,
                            longitude: Number
                        },
                        type: String,
                        spot: Number,
                        sideOfStreet: String,
                        mappedRoadName: String,
                        label: String,
                        shapeIndex: Number
                    },
                    length: Number,
                    travelTime: Number,
                    maneuver: [
                        {
                            position: {
                                latitude: Number,
                                longitude: Number
                            },
                            instruction: String,
                            travelTime: Number,
                            length: Number,
                            id: String,
                            _type: String
                        }
                    ]
                }
            ],
            summary: {
                distance: Number,
                trafficTime: Number,
                baseTime: Number,
                flags: [
                    String,
                    String
                ],
                text: String,
                travelTime: Number,
                _type: String
            }
        }
    ],

})


mongoose.module('flow', flow);

module.exports = flow;