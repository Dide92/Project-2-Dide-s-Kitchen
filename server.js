require("dotenv").config()
const express= require('express')
const app = express()
const methodOverride = require('method-override')

const PORT = process.env.PORT || 9007
const Food = require('./models/food.js')
const foodsController = require('./controllers/foods.js')


const mongoose = require('mongoose')

//Mongodb Atlas Connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.set('strictQuery', true);
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: false,
})

const db = mongoose.connection
db.on('error', (error) => console.log(error.message + ' is Mongo not running?'))
db.on('connected', () => console.log(' Mongo is connected'))
db.on('disconnected', () => console.log(' Mongo is disconnected'))


//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.use('/dideskitchen/', foodsController)
app.use(express.static('public'))




//port
app.listen(PORT, () => {
    console.log('Server is listening on: '+ PORT)
})