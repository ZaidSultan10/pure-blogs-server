const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.use(bodyParser.json({limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))
app.use(cors())

const PORT = process.env.PORT || 5012
console.log("PORT ->",process.env.PORT)

app.listen(PORT, () => {
    console.log(`SERVER IS LISTENING ON PORT : ${PORT}`)
})