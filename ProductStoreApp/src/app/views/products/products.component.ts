import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productos=[
    {
      id:1,nombre:'Laptop Lenovo', precio:1899
    },
    {
      id:2,nombre: 'Smartphone Samsung', precio:9999
    },
    {
      id:3,nombre: 'Monitor LG 24"', precio:3999
    },
    {
      id:4,nombre: 'Teclado Mecanico Reddragon', precio:1299
    },
    {
      id:5,nombre: 'Mouse Inalambrico Logitech', precio:799
    }
  ];
}
