import RecipeController from '../controllers/RecipeController';
import express from 'express';
//const router= express.Router();

// all get request requests
exports.all= (req, res)=>{
    let result = RecipeController.getRecipe();
    res.json(result);
};

exports.one = (req, res)=>{
    let id = req.params.recipeId;
    let result = RecipeController.getOne(id);
    res.json(result);
};

exports.add = (req, res)=>{
    let recipeInfo = {
        id: req.body.id,
        title:req.body.title,
        description:req.body.description,
        ingredients:req.body.ingredients,
        direction:req.body.direction
    };
    RecipeController.addOne(recipeInfo);
    //res.json(result);
}

//router.get('/sort', recipeController.sort);

//all post request
// router.post('/', recipeController.addRecipe);
// router.post('/:recipeId/reviews', recipeController.review);

// //delete request
// router.delete('/:recipeId', recipeController.deleteRecipe);

// //put request
// router.put('/:recipeId/', recipeController.updateRecipe);


// router.get('/', recipeController.popularRecipes);
// router.get('/:id/favorite', recipeController.favorite);
// router.get('/id/:detail', recipeController.recipeDetails);
// router.post('/:id/downvote', recipeController.review);


