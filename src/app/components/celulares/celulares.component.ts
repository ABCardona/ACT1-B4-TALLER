import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-celulares',
  standalone: false,
  templateUrl: './celulares.component.html',
  styleUrl: './celulares.component.scss',
})
export class CelularesComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private readonly productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.obtenerCelulares().subscribe((productos) => {
      this.productos = productos;
    });
  }
}
