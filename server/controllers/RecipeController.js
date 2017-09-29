'use strict'
import RecipesServices from '../services/RecipeServices';

class RecipeController{
    constructor(){}

   getRecipe(){
        return  RecipesServices.getAllRecipes();
   }

   getOne(RecipeId){
       return RecipesServices.getSingleRecipe(RecipeId);
   }
   addOne(recipeInfo){
        return RecipesServices.addRecipe(recipeInfo);
   }
       
}

module.exports = new RecipeController();