import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [];

    constructor(private shoppingListService: ShoppinglistService) {
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingredientsChanged.subscribe (
            (newIngredients: Ingredient[]) => this.ingredients = newIngredients
        );
    }
}
