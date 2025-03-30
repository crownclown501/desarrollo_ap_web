import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productos = [
    {
      id: 1,
      nombre: 'Laptop Lenovo',
      descripcion: 'Laptop con procesador Intel Core i5, 8GB de RAM y 256GB SSD.',
      precio: 1899
    },
    {
      id: 2,
      nombre: 'Smartphone Samsung',
      descripcion: 'Un Smartphone con pantalla AMOLED, cámara triple y batería de larga duración.',
      precio: 9999
    },
    {
      id: 3,
      nombre: 'Monitor LG 24"',
      descripcion: 'Monitor Full HD de 24 pulgadas con tecnología IPS y tiempo de respuesta rápido.',
      precio: 3999
    },
    {
      id: 4,
      nombre: 'Teclado Mecánico Redragon',
      descripcion: 'Teclado mecánico RGB con retroiluminación y switches mecánicos.',
      precio: 1299
    },
    {
      id: 5,
      nombre: 'Mouse Inalambrico Logitech',
      descripcion: 'Mouse inalámbrico ergonómico con sensor óptico de alta precisión.',
      precio: 799
    }
  ];

  producto: any;

  constructor(private route: ActivatedRoute) {
    const id = +this.route.snapshot.paramMap.get('id')!; // Obtiene el ID del parámetro de la ruta
    this.producto = this.productos.find(p => p.id === id); // Busca el producto por ID
  }

  agregarAlCarrito() {
    alert('Producto agregado al carrito (simulación).');
  }
}