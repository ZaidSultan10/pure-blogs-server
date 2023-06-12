const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()
dotenv.config()

app.use(bodyParser.json({limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))
app.use(cors())

const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.sqnplmh.mongodb.net/`

const PORT = process.env.PORT || 5012
console.log("PORT ->",process.env.PORT)

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true}).then(() => {
    app.listen(PORT, () => {
        console.log(`SERVER IS LISTENING ON PORT : ${PORT}`)
    })
}).catch((err) => {
    console.log(err)
})
