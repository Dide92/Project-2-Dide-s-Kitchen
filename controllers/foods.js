const express = require('express')
const router = express.Router()
const Food = require ('../models/food.js')

//routes

 //Index
 router.get('/', (req, res) => {
    res.render('index.ejs', {
    })
 })

//guestIndex
// router.get('/guestrecipes', (req, res) => {
//    Food.find({}, (err, foundFood)=> {
//       if(err) {console.log(err.message)}
//     res.render('guestindex.ejs', {
//       foods:foundFood
//     })
//  })
// })


router.get('/guestrecipes', (req, res) => {
   Food.find({}, (error, foundFoods) => {
     if (error) {
       console.log(error);
     } else {
       res.render('guestindex.ejs', {foods: foundFoods});
     }
   });
 });
 
//About Me Page
router.get('/about', (req, res) => {
   res.render('about.ejs')
})

//sign up page
router.get('/signup', (req, res) => {
   res.render('signup.ejs')
})


//My Recipe Page
router.get('/myrecipes', (req, res) => {
   res.render('myRecipes.ejs')

})

 //New
router.get('/new', (req, res) => {
   res.render('new.ejs')
})


// router.get('/seed', (req, res) => {
//    Food.create([
//        {
//        recipeName:'Olive Bread',
//        recipeBy:'Dide',
//        category:'Bakery',
//        ingredients: '600g Flour',
//        directions:'Mix all the ingredients. Cover the dough and let it rise for 3 hours. After 3 hours, start folding the dough for about 10 times and place it on a parchment paper. Cover it again and wait 1 hour. Preheat the oven to 230C/450F and place the dopugh inside the dutch oven and bake it for 30 minutes with the lid on. After 30 minutes, take the lid and the parchement paper off and bake it for another 10 minutes. Bon Appetit!',
//        image:"https://foolproofliving.com/wp-content/uploads/2013/11/Borek-Recipe-600x600.jpg"
//        },
//        {
//          recipeName:'Olive Bread',
//          recipeBy:'Dide',
//          category:'Bakery',
//          ingredients: '600g Flour',
//          directions:'Mix all the ingredients. Cover the dough and let it rise for 3 hours. After 3 hours, start folding the dough for about 10 times and place it on a parchment paper. Cover it again and wait 1 hour. Preheat the oven to 230C/450F and place the dopugh inside the dutch oven and bake it for 30 minutes with the lid on. After 30 minutes, take the lid and the parchement paper off and bake it for another 10 minutes. Bon Appetit!',
//          image:"https://foolproofliving.com/wp-content/uploads/2013/11/Borek-Recipe-600x600.jpg"
//        }
//      ], (err, data) => {
//       console.log(err, 'this is the error')
//        res.redirect('/dideskitchen/guestrecipes')
//    })
// })


//Create new item
router.post('/guestrecipes', (req, res) => {
  Food.create(req.body, (error, createdFood) => {
       console.log(error, "THIS IS THE ERROR")
       console.log(createdFood)
       res.redirect('/dideskitchen/guestrecipes')
  });
});


// show 
router.get('/guestrecipes/:index', (req, res) => {
   Food.findById(req.params.index, (err, foundFood) => {
        res.render('show.ejs', {
            food:foundFood
        });
    });
});

//delete
router.delete('/guestrecipes/:index', (req, res) => {
   Food.findByIdAndDelete(req.params.index, (err, deletedFood) => {
       //will delete a document with the given id
       if (err) {
           console.log(err)
           res.send(err)
       } else {
           //redirect to the index page
           console.log(deletedFood)
           res.redirect('/dideskitchen/guestrecipes')
       }
   })
})

router.get('/guestrecipes/:index/edit', (req, res) => {
	Food.findById(req.params.index, (err, foundFood) => {
		if(err) {
			console.log(err)
			res.send(err)
		} else {
			// make the edit form show the existing data 
			res.render('edit.ejs', {
				food: foundFood
			})
		}
	})
})

router.put('/guestrecipes/:id', (req, res) => {
    Food.findByIdAndUpdate(req.params.id, req.body, { new: true, // true to return the modified document
}, (err, updatedFood) => {
    //findByIdAndUpdate updates a fruit with a given id
    //the new option means we want to get the updated fruit return
    //without this flag, we will get the fruit before it was notified
    if (err) {
        console.log(err)
        res.send(err)
    }else {
        console.log(updatedFood)
        //redirect to the index route
        res.redirect('/dideskitchen/guestrecipes')
    }
})
})


module.exports = router