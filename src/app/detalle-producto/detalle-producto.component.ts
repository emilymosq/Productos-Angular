import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DatoProductoService} from '../services/dato-producto.service';
import {DatosProductos} from '../services/interfaces/datos-productos';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.scss'
})
export class DetalleProductoComponent {

  tarea: DatosProductos | null = null;

  constructor(
    private datosProducto: DatoProductoService,
    private router: Router) {}

  ngOnInit() {
    this.datosProducto.datosProducto$.subscribe((dato: DatosProductos | null) => {
      this.tarea = dato;
    });
  }

  enviarAtrasLista(){
    this.router.navigate(['']);
  }

}

