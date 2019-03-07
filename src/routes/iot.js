const router = require('express').Router()

router.post('/iot', require('./../controller/iot').post)

module.exports =  router


