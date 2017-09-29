'use strict'
import Table from '../model/tables';


class RecipesServices {
    constructor(Table){
        this.table = Table;
    }

    getAllRecipes(){
        return this.table;
    }

    getSingleRecipe(recipeId){
        let recipe = this.table.filter(recipe => {
            if(recipe.id == recipeId) return recipe;
        });
        return recipe || 'Nothing found for this recipe';

    }

    addRecipe(recipeInfo){
       if(!recipeInfo){
         return false;
       }
       this.table.Recipes.push(recipeInfo);
       return true;
    }

    updateRecipe(recipeId, recipeInfo){
        let recipe = this.getSingleRecipe(recipeId);
        if(!recipe){
            return false
        }else{
            recipe.title = recipeInfo.title || recipe.title;
            recipe.description = recipeInfo.description || recipe.description;
            recipe.ingredients = recipeInfo.ingredients || recipe.ingredients;
            recipe.direction = recipeId.direction || recipe.direction;
            return true;
        }
    }


    deleteRecipe(recipeId){
        let recipes = this.table;
        for(i=0; i < recipes.length; i++){
            if(recipes[i].id === recipeId){
                recipe[i].splice(i, 1);
                return true;
            }
           return false;
        }
        
    }

}

module.exports = new RecipesServices(Table.Recipes);