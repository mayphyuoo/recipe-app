import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes/recipe.model";
import { Ingredient } from "./shared/ingredient.model";

@Injectable()
export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('Fried Egg',
            'A simple fried egg',
            'https://images.pexels.com/photos/6294391/pexels-photo-6294391.jpeg',
            [
                new Ingredient('Egg', 2),
                new Ingredient('Salt', 1),
                new Ingredient('Pepper', 1),
            ]),
            new Recipe('Fish and Chips',
            'Classic fish and chips',
            'https://upload.wikimedia.org/wikipedia/commons/3/32/Modern_fish_and_chips_%288368723726%29.jpg',
            [
                new Ingredient('Barramundi', 2),
                new Ingredient('French Fries', 20),
                new Ingredient('Lemon', 1),
                new Ingredient('Tartare Sauce', 1),
            ]),
    ];
    recipeSelected = new EventEmitter<Recipe>();

    constructor() { }

    addAccount(newRecipe: Recipe) {
        this.recipes.push(newRecipe);
    }
}