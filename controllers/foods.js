const express = require('express')
const router = express.Router()
const Food = require ('../models/food.js')

//routes
 //Index
 router.get('/', (req, res) => {
   Food.find({}, (err, foundFood)=> {
      if(err) {console.log(err.message)}
    res.render('index.ejs', {
      foods:foundFood
    })
 })
})
//About Me Page
router.get('/about', (req, res) => {
   res.render('about.ejs')
})

 //New
router.get('/new', (req, res) => {
   res.render('new.ejs')
})


router.get('/seed', (req, res) => {
   Food.create([
       {
       recipeName:'Olive Bread',
       image:url("../img/bake.png"),
       ingredients: ['600g Flour', '300ml Warm Water', '1 Teaspoon Salt', '1 Instant Yeast','Olives'],
       directions:'Mix all the ingredients. Cover the dough and let it rise for 3 hours. After 3 hours, start folding the dough for about 10 times and place it on a parchment paper. Cover it again and wait 1 hour. Preheat the oven to 230C/450F and place the dopugh inside the dutch oven and bake it for 30 minutes with the lid on. After 30 minutes, take the lid and the parchement paper off and bake it for another 10 minutes. Bon Appetit!'
       },
       {
         recipeName:'Olive Bread',
         image: url("../img/bake.png"),
         ingredients: ['600g Flour', '300ml Warm Water', '1 Teaspoon Salt', '1 Instant Yeast','Olives'],
         directions:'Mix all the ingredients. Cover the dough and let it rise for 3 hours. After 3 hours, start folding the dough for about 10 times and place it on a parchment paper. Cover it again and wait 1 hour. Preheat the oven to 230C/450F and place the dopugh inside the dutch oven and bake it for 30 minutes with the lid on. After 30 minutes, take the lid and the parchement paper off and bake it for another 10 minutes. Bon Appetit!'
         },
       {
         recipeName:'Olive Bread',
         image: url("../img/bake.png"),
         ingredients: ['600g Flour', '300ml Warm Water', '1 Teaspoon Salt', '1 Instant Yeast','Olives'],
         directions:'Mix all the ingredients. Cover the dough and let it rise for 3 hours. After 3 hours, start folding the dough for about 10 times and place it on a parchment paper. Cover it again and wait 1 hour. Preheat the oven to 230C/450F and place the dopugh inside the dutch oven and bake it for 30 minutes with the lid on. After 30 minutes, take the lid and the parchement paper off and bake it for another 10 minutes. Bon Appetit!'
         }
   ], (err, data) => {
       res.redirect('/didekitchen/myrecipes')
   })
})
//Create new item
router.post('/', (req, res) => {
  Food.create(req.body, (error, createdFood) => {
       // console.log(error, "THIS IS THE ERROR")
       console.log(createdFood)
     res.redirect('/didekitchen/guestrecipes')
  });
});

//show 

router.get('/:index', (req, res) => {
   Food.findById(req.params.index, (err, foundFood) => {
        res.render('show.ejs', {
            food:foundFood
        });
    });
});


module.exports = router