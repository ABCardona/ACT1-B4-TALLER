import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private readonly apiUrl = environment.apiUrl;

  private readonly celulares: Producto[] = [
    {
      id: 1,
      nombre: 'Samsung A22',
      descripcion:
        '6.5 pulgadas con 128 GB de almacenamiento y 8 GB de RAM, cámara de alta resolución de 48 MP.',
      precio: 2800,
      imagen:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=160&h=280&q=80',
      categoria: 'celular',
      oferta: true,
    },
    {
      id: 2,
      nombre: 'Iphone 13 Pro max',
      descripcion:
        'Pantalla de 6.7 pulgadas y sistema de cámaras avanzado. 256 GB de almacenamiento.',
      precio: 7500,
      imagen:
        'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=160&h=280&q=80',
      categoria: 'celular',
      oferta: true,
    },
    {
      id: 3,
      nombre: 'Iphone 11',
      descripcion:
        'Pantalla de 6.5 pulgadas, 8 GB de RAM y sistema de cámaras avanzado. 128 GB de almacenamiento.',
      precio: 5200,
      imagen:
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=160&h=280&q=80',
      categoria: 'celular',
      oferta: true,
    },
    {
      id: 4,
      nombre: 'Iphone 12',
      descripcion:
        'Pantalla de 6.1 pulgadas, 8 GB de RAM y sistema de cámaras avanzado. 128 GB de almacenamiento.',
      precio: 6000,
      imagen:
        'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=160&h=280&q=80',
      categoria: 'celular',
      oferta: true,
    },
  ];

  private readonly laptops: Producto[] = [
    {
      id: 5,
      nombre: 'Acer Aspire 5',
      descripcion: 'Ryzen 5, 8GB RAM, 512GB SSD, pantalla 15.6" Full HD.',
      precio: 4299,
      imagen:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=160&h=280&q=80',
      categoria: 'laptop',
      oferta: true,
    },
    {
      id: 6,
      nombre: 'HP Pavilion 14',
      descripcion: 'Intel Core i5, 8GB RAM, 256GB SSD, pantalla 14" liviana de 1.4kg.',
      precio: 4999,
      imagen:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=160&h=280&q=80',
      categoria: 'laptop',
      oferta: true,
    },
    {
      id: 7,
      nombre: 'Lenovo LOQ Gaming',
      descripcion: 'Intel Core i7, 16GB RAM, RTX 3050, 512GB SSD, pantalla 15.6" 144Hz.',
      precio: 7850,
      imagen:
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=160&h=280&q=80',
      categoria: 'laptop',
      oferta: true,
    },
    {
      id: 8,
      nombre: 'Dell Inspiron 15',
      descripcion: 'Intel Core i3, 8GB RAM, 256GB SSD, ideal para tareas escolares y ofimática.',
      precio: 3499,
      imagen:
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=160&h=280&q=80',
      categoria: 'laptop',
      oferta: true,
    },
  ];

  constructor(private readonly http: HttpClient) {}

  obtenerCelulares(): Observable<Producto[]> {
    return of(this.celulares).pipe(delay(500));
  }

  obtenerLaptops(): Observable<Producto[]> {
    return of(this.laptops).pipe(delay(500));
  }
}
