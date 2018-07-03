import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // adding recipe array
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a description test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Test Recipe', 'This is a description test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Test Recipe', 'This is a description test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')

  ];



  constructor() { }

  ngOnInit() {
  }

}
