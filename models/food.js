const mongoose = require("mongoose")
const foodSchema = new mongoose.Schema({
    recipeName: {type:String},
    recipeBy: {type:String},
    category: {type:String, enum:['soup', 'salad', 'breakfast', 'dinner', 'dessert', 'bakery']},
    ingredients: String,
    description: String,
    image: String
})

const Food = mongoose.model('Food', foodSchema)
module.exports = Food