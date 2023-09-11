import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('Fried Egg', 'a simple fried egg', 'https://images.pexels.com/photos/6294391/pexels-photo-6294391.jpeg'),
        new Recipe('Fried Egg', 'a simple fried egg', 'https://images.pexels.com/photos/6294391/pexels-photo-6294391.jpeg'),
    ];
}