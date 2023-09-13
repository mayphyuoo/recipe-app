import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "./shared/ingredient.model";

@Injectable()
export class ShoppinglistService {
    private ingredients: Ingredient[] = [
        new Ingredient('Egg', 2),
        new Ingredient('Pepper', 1),
        new Ingredient('Salt', 1),
    ];

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    onIngredientAdded(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}