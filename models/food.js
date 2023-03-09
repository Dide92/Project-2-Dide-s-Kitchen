const mongoose = require("mongoose")
const foodSchema = new mongoose.Schema({
    recipeName: {type:String, required:true},
    recipeBy: {type:String, required:true},
    category: {type:String, enum:['Soup', 'Salad', 'Breakfast', 'Dinner', 'Dessert', 'Bakery'], required:true},
    ingredients: String,
    description: String,
    image: String
})

const Food = mongoose.model('Food', foodSchema)
module.exports = Food