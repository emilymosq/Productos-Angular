import { Injectable } from '@angular/core';
import {DatosProductos} from './interfaces/datos-productos';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatoProductoService {

  datos: BehaviorSubject<DatosProductos | null> = new BehaviorSubject<DatosProductos | null>(null);

  datosProducto$: Observable<DatosProductos|null> = this.datos.asObservable();

  constructor() {}

  setDatos(datos: DatosProductos|null){
    this.datos.next(datos);
  }

}
