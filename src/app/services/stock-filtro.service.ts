import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockFiltroService {

  estado: BehaviorSubject<string> = new BehaviorSubject<string>("");
  estado$: Observable<string> = this.estado.asObservable();

  constructor() {
  }

  actualizarEstado(estado: string) {
    this.estado.next(estado);
  }
}
