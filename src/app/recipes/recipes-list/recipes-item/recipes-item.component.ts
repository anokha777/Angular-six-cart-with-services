import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  showRecipeDetails(recipe: Recipe) {
    this.recipeService.showRecipeEventForRecipeListComponent.emit({
      name : recipe.name,
      description : recipe.description,
      imagePath : recipe.imagePath,
      ingredients : recipe.ingredients
    });
   }



 

}
