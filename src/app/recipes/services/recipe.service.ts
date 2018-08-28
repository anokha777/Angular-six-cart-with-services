import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  showRecipeEventForRecipeListComponent = 
  new EventEmitter<{name: string, description: string, imagePath: string}>(); 

  private recipes: Recipe[] = [
    new Recipe('A test Recipe1', 'Test1', 'https://images.101cookbooks.com/chana-masala-recipe-h.jpg', 
    [new Ingredient('Dhokla', 45), new Ingredient('Meat', 8)]),
    new Recipe('A test Recipe2', 'Tes2t', 'https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Khaman-Dhokla-KhaanaKhazana.jpg', 
    [new Ingredient('bread', 9), new Ingredient('milk', 8)])
  ];


  getRecipes() {
    return this.recipes.slice();
  }
}
