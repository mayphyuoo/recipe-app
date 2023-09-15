import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
    @Input() recipe: Recipe;
    @Output() recipeIsSelected = new EventEmitter<Recipe>();

    constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {}

    // onRecipeClicked() {
    //     this.router.navigate([this.recipe.id], {relativeTo: this.route});
    // }
}
