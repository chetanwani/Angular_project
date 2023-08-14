import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/Shared/model/food'; 

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  [x: string]: any;
  
  food!: Food;
  constructor(activatedRoute:ActivatedRoute, foodService:FoodService,
   private cartService:CartService ) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.food = foodService.getFoodById(params.id);
      });
    }
  

  ngOnInit(): void {}
    addToCart()
    {
      this.cartService.addToCart(this.food);
      this.router.navigateByUrl('/cart-page');
    }
  }







