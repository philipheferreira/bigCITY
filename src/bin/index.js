'use_strict'
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const routers = require('../routes')

app.use('/api/v1/ws/', routers)

app.listen(port, ()=>console.log(`Servidor rodando na porta ${port}`))


