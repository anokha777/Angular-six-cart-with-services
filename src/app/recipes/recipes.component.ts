import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeDatails = Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.showRecipeEventForRecipeListComponent
    .subscribe(
      (recipe: any) =>{
        this.recipeDatails = recipe;
      }
    );
  }

  showRecipeDetails(event) {
    this.recipeDatails = event;

    console.log('event === ', this.recipeDatails);
  }

}
