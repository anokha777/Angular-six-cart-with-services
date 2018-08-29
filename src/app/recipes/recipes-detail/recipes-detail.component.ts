import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipeDeatilsForRecipeDetailComponent : Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppinglist() {
    this.recipeService.addIngredientTOShoppinglist(this.recipeDeatilsForRecipeDetailComponent.ingredients);
  }

}
