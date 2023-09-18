
import { Subject } from "rxjs";

import { Ingredient } from "./shared/ingredient.model";

export class ShoppinglistService {
    private ingredients: Ingredient[] = [
        new Ingredient('Egg', 2),
        new Ingredient('Pepper', 1),
        new Ingredient('Salt', 1),
    ];

    ingredientsChanged = new Subject<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    onIngredientAdded(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}