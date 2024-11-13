import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})    
export class CartService {
  //Array para almacenar los productos en el carrito
  private cartItems: any[] = [];
  constructor() { }

  //Método para agregar productos al carrito
  addToCart(product: any) {
    this.cartItems.push(product);
  }

  //Método para obtener los productos en el carrito
  getCartItems() {
    return this.cartItems;
  }


}
