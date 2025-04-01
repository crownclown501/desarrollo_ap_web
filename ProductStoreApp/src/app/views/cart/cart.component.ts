import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  productosCarrito = [
    {
      titulo:'Audifonos Bluetooth',
      imagen: 'assets/images/audifonos.jpg ',
    },
    {
      titulo:'Smartwatch  Xiaomi',
      imagen :'assets/images/smartwatch.jpg'
    },
    {
      titulo: 'Camara Web HD',
      imagen :'assets/images/camara.jpg'
    },
    {
      titulo: 'Disco Duro Externo',
      imagen :'assets/images/disco.jpg'
    },
    {
      titulo: 'Bocina Portatil',
      imagen :'assets/images/bocina.jpg'
    }
  ];
}
