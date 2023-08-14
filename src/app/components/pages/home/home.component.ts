import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/Shared/model/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  food:Food[] = [];
  
  constructor(private foodservice:FoodService,activatedRoute:ActivatedRoute) {
    
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
       this.food  = this.foodservice.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
      this.food  = this.foodservice.getAllFoodsByTag(params.tag);
      else
      this.food  = foodservice.getAll();
      
      
    })
    

  }
  ngOnInit(): void {
    
  }
}

