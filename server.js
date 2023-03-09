
const express= require('express')
const app = express()
// const methodOverride = require('method-override')

const PORT = process.env.PORT || 9009
require('dotenv').config();
// const Food = require('./models/food.js')
// const foodsController = require('./controllers/foods.js')


//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use(methodOverride('_method'))
app.use(express.static('public'))
// app.use('/dideskitchen', foodsController)


//Routes
 //Index
 app.get('/', (req, res) => {
    res.render('index.ejs')
 })


//port
app.listen(PORT, () => {
    console.log('Server is listening on: '+ PORT)
})