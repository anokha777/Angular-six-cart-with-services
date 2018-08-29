import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  constructor() { }

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 32),
    new Ingredient('Tomatoes', 90)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewnewIngredient(ingredient: Ingredient) {
    console.log(ingredient);
    this.ingredients.push(ingredient);
    
    // emmiting event for ingredient changed
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {

    // for(let ingredient of ingredients){
    //   this.addNewnewIngredient(ingredient);
    // } -----------------------------------------or below code better

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  
}
