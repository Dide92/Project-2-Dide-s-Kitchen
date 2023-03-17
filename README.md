# Project-2-Dide-s-Kitchen

"Dide's Kitchen" - Cookbook Diary

Project Description:
I have a list of recipes that I've organized using this website. The app is a recipe storage app. It is a virtual recipe book with images. My own recipees are stored in a seperate tab and the user's  recipes are displayed under Guest Recipes once they add their own recipes. The user can also sign up for recipes. Each time a new recipe is added to the web, they will receive a notification. 

General App Idea/Purpose:

All my recipes will be organized and displayed by using the 7 RESTful routes and CRUD.
This is a full stack application using node.js, express, mongoose and ejs.

Models including field names and their datatypes:

Models folder will include food.js file for the Schema. A name of the recipe, recipe by, category(dropdown list), ingredients, description and image/s.
A list of routes (e.g. POST /pins/ allows users to post a picture of a pin)

Index --> Homepage includes a list of categories
Show --> 2 show pages, one will display Dide's recipes and the other will displaye the guest recipes
New --> Create a new recipe page for the guests
Create --> Post the created recipe under "Guest Recipes:
Edit --> By clicking the edit button, change the new recipe under guest recipes
Update --> using put method update the edited new recipe under guest recipe
Destroy --> using the delete method, delete the new recipe from the database by clicking the "delete" button.

Wireframes
Wireframes with basic page layouts

Copy and paste or drag and drop your images here.

Homepage
<img width="932" alt="Homepage" src="https://user-images.githubusercontent.com/119354325/224113212-4c61f5c4-8bc3-47b5-8a05-420ca9881c02.png">

About-me
<img width="938" alt="About-me" src="https://user-images.githubusercontent.com/119354325/224113242-83ef6212-bc1d-4129-9806-8a233e0d1a11.png">

my-recipe
<img width="977" alt="my-recipe" src="https://user-images.githubusercontent.com/119354325/224113304-fdfdc807-15f5-4462-a531-772a68b06988.png">

Add-recipe
<img width="933" alt="Add-recipe" src="https://user-images.githubusercontent.com/119354325/224113369-4e2fc369-0eff-4afb-b256-abccdd30a381.png">

guest-recipe
<img width="956" alt="guest-recipe" src="https://user-images.githubusercontent.com/119354325/224113393-f162737d-6377-4ecb-b571-a2580340a9c5.png">

Subscribe
<img width="926" alt="Subscribe" src="https://user-images.githubusercontent.com/119354325/224113421-1d23469b-bbf8-44d2-b553-19459eb1772f.png">

## User Stories > User stories detailing app functionality
> The user will be able to travel through my virtual recipe book. They can see different categories of foods by Dide and add their own edit and delete recipes as well. If I can successfully add my subscription stretch goal, I would like the user to subscribe with their name and email for new recipes to come.

**MVP Goals**
> Use the seven RESTful routes that perform the CRUD operations(using Index, new, create, show edit, update and destroy routes)
> Add a form for adding new recipes.
> Have a public folder for css and images and the proper middleware.
> Used controllers folder to organize routes.
> Used bootstrap for css.
> Made a subscription/sign up page.
> Used header & footer partials.
> Follow us on social media links have been added and linked properly.
