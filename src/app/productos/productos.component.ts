import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatosProductos} from '../services/interfaces/datos-productos';
import {DatoProductoService} from '../services/dato-producto.service';
import {StockFiltroService} from '../services/stock-filtro.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit {

  estado: string = "todos";

  constructor(private router: Router,
              private productoDatos: DatoProductoService,
              private stockFiltro: StockFiltroService) {
  }

  ngOnInit() {
    this.stockFiltro.estado$.subscribe(valor => {
      this.estado = valor;
    })
  }

  productos: DatosProductos[] = [
    {
      id: 1,
      nombre: 'Monitor.',
      precio: 500,
      estado: "No disponible",
      stock: false,
    },
    {
      id: 2,
      nombre: 'Torre.',
      precio: 350,
      estado: "No disponible",
      stock: false,
    },
    {
      id: 3,
      nombre: 'Ratón.',
      precio: 80,
      estado: "Disponible",
      stock: true,
    },
    {
      id: 4,
      nombre: 'Teclado.',
      precio: 100,
      estado: "Disponible",
      stock: true,
    },
    {
      id: 5,
      nombre: 'Audifonos.',
      precio: 250,
      estado: "Disponible",
      stock: true,
    }];

  enviarDatos(item: DatosProductos) {
    this.productoDatos.setDatos(item);
    this.router.navigate(['/detalle-producto']);
  }

}
