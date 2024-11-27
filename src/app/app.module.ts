import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import {FormularioComponent} from './formulario/formulario.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductosComponent} from './productos/productos.component';


@NgModule({
  declarations: [
    AppComponent,
    DetalleProductoComponent,
    FormularioComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
