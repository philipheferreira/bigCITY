const router = require('express').Router()

router.get('/', (req, res, next)=> {
    const response = {
        api: 'bigCITY api',
        version: '1.0.0',
        status: 'OK'
    }
    res.send(response)
})

module.exports = router