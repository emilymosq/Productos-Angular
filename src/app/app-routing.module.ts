import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {ProductosComponent} from './productos/productos.component';
import {DetalleProductoComponent} from './detalle-producto/detalle-producto.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  {path: 'detalle-producto', component: DetalleProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
