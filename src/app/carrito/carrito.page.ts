import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

// Definimos la interface para los productos del carrito
interface CartItem {
  id: number;
  name: string;
  price: number;
 // cantidad de productos

}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  // Usamos CartItem[] 
  cartItems: CartItem[] = [];
  // Inyectamos el servicio de carrito en el constructor  
  constructor(private cartService: CartService) {
    // Obtenemos los productos en el carrito
    this.cartItems = this.cartService.getCartItems();
  }

  ngOnInit() {
  }

}
