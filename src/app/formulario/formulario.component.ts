import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StockFiltroService} from '../services/stock-filtro.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  formulario: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private estadoService: StockFiltroService,
  ) {

    this.formulario = this.formBuilder.group({
      estado: ["", [Validators.required]],
    });
  }
  enviarEstado() {
    this.estadoService.actualizarEstado(this.formulario.value.estado);
  }
}
