export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: 'celular' | 'laptop';
  oferta?: boolean;
}
