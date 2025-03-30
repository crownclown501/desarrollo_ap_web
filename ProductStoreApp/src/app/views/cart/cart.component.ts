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
      imagen: '/ProductStoreApp1/src/assets/image/audifonos.jpg ',
    },
    {
      titulo:'Smartwatch  Xiaomi',
      imagen :'assets/image/smartwatch.jpg'
    },
    {
      titulo: 'Camara Web HD',
      imagen :'assets/image/camara.jpg'
    },
    {
      titulo: 'Disco Duro Externo',
      imagen :'assets/image/disco.jpg'
    },
    {
      titulo: 'Bocina Portatil',
      imagen :'assets/image/bocina.jpg'
    }
  ];
}
