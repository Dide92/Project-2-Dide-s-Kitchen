const express = require('express')
const router = express.Router()
const Food = require ('../models/food.js')

//routes
 //Index
 router.get('/', (req, res) => {
    res.render('index.ejs')
 })


module.exports = router