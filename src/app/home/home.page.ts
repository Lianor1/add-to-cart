import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

// Definimos la interface para los productos
interface Product {
  id: string;        // Como tus IDs son strings
  name: string;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cartCount: number = 0;
  productos: Product[] = [
    {
      id: '1',
      name: 'Traje',
      price: 185.0,
    },
    {
      id: '2',
      name: 'Polo',
      price: 35.0,
    },
    {
      id: '3',
      name: 'Polo',
      price: 65.0,
    },
    {
      id: '4',
      name: 'Polo',
      price: 55.0,
    },
  ];
  //Inyectamos el servicio de carrito en el constructor
  constructor(private cartService: CartService) {}
  //Método para agregar productos al carrito
  addToCart(product: Product): void {
  //Agregamos el producto al carrito
    this.cartService.addToCart(product);
  //Actualizamos el número de productos en el carrito
    this.cartCount = this.cartService.getCartItems().length;
  }
}
