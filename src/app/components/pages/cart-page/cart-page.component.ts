import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/Shared/model/CartItem';
import { Cart } from 'src/Shared/model/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService){
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart = cart
    })
  }
  ngOnInit(): void {}

  
    removeFromCart(CartItem:CartItem){
      this.cartService.removeFromCart(CartItem.food.id)
    }
    changeQuantity(cartItem:CartItem,quantityInString:string){
      const quantity = parseInt(quantityInString);
      this.cartService.changeQuantity(cartItem.food.id, quantity);
    }
  }


