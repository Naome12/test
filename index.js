const bodyParser = require('body-parser')
const express = require('express')
const connectDb = require('./config/db')
const router = require('./routes/route')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT

app.set('view engine','ejs')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

connectDb()
app.use('/',router)
app.listen(PORT,()=>{
console.log(`server is running`)
})
