import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // adding recipe array
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a description test', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fdish-meal-food-produce-breakfast-lunch-cuisine-homemade-cooked-dishes-tasty-meals-italian-restaurants-spoons-forks-plates-wines-sense-sauces-pastas-lunches-plate-of-food-cheeses-dinners-red-wines-main-courses-dinner-plates-655288.jpg&imgrefurl=https%3A%2F%2Fpxhere.com%2Fen%2Fphoto%2F655288&docid=fPi2dvnjSPd6mM&tbnid=e18AetbCDxKj9M%3A&vet=10ahUKEwjJ7f_KgILcAhXp1IMKHTLfBVYQMwjgASgFMAU..i&w=3456&h=5184&bih=703&biw=1280&q=meals%20image&ved=0ahUKEwjJ7f_KgILcAhXp1IMKHTLfBVYQMwjgASgFMAU&iact=mrc&uact=8')
  ];



  constructor() { }

  ngOnInit() {
  }

}
