import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[] = [];
    private subscription: Subscription;

    constructor(private shoppingListService: ShoppinglistService) { }

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
        this.subscription = this.shoppingListService.ingredientsChanged.subscribe (
            (newIngredients: Ingredient[]) => this.ingredients = newIngredients
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
