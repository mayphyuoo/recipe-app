import { Injectable } from "@angular/core";

import { Recipe } from "./recipes/recipe.model";
import { Ingredient } from "./shared/ingredient.model";
import { ShoppinglistService } from "./shoppingList.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // recipes: Recipe[] = [
    //     new Recipe('Fried Egg',
    //         'A simple fried egg',
    //         'https://images.pexels.com/photos/6294391/pexels-photo-6294391.jpeg',
    //         [
    //             new Ingredient('Egg', 2),
    //             new Ingredient('Salt', 1),
    //             new Ingredient('Pepper', 1),
    //         ]),
    //         new Recipe('Fish and Chips',
    //         'Classic fish and chips',
    //         'https://upload.wikimedia.org/wikipedia/commons/3/32/Modern_fish_and_chips_%288368723726%29.jpg',
    //         [
    //             new Ingredient('Barramundi', 2),
    //             new Ingredient('French Fries', 20),
    //             new Ingredient('Lemon', 1),
    //             new Ingredient('Tartare Sauce', 1),
    //         ]),
    // ];

    private recipes: Recipe[] = [];

    constructor(private slService: ShoppinglistService) { }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(newRecipe: Recipe) {
        this.recipes.push(newRecipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}