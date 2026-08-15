import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-laptops',
  standalone: false,
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.scss',
})
export class LaptopsComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private readonly productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.obtenerLaptops().subscribe((productos) => {
      this.productos = productos;
    });
  }
}
