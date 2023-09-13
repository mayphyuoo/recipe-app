import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppinglistService } from 'src/app/shoppingList.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
    @Input() recipe : Recipe | null = null;

    constructor(private shoppingListService: ShoppinglistService) {}

    onAddToShoppingList() {
        for(let i of this.recipe.ingredients) {
            this.shoppingListService.onIngredientAdded(i);
        }
    }
}
