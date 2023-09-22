import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe : Recipe | null = null;
    id: number;

    constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        // this.recipe = this.recipeService.getRecipe(+this.route.snapshot.params['id']);

        // acts reactively
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipe(this.id);
            }
        )
    }

    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }
}
