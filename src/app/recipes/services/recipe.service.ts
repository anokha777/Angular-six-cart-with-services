import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) { }

  showRecipeEventForRecipeListComponent = 
  new EventEmitter<{name: string, description: string, imagePath: string, ingredients: Ingredient[]}>(); 

  private recipes: Recipe[] = [
    new Recipe('Mushroom do pyaza', 'Mixed vegetable', 'https://images.101cookbooks.com/chana-masala-recipe-h.jpg', 
    [new Ingredient('Dhokla', 45), new Ingredient('Meat', 8)]),
    new Recipe('Navrattan korma', 'Pakhala', 'https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Khaman-Dhokla-KhaanaKhazana.jpg', 
    [new Ingredient('bread', 9), new Ingredient('milk', 2)])
  ];


  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientTOShoppinglist(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
