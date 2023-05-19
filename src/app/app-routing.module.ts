import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "producto", component: CrearProductoComponent},
  { path: "busqueda/:texto", component: BusquedaComponent },
  {path: "carrito", component:CarritoComponent},
  {path: "gestion", component: GestionProductosComponent},
  {path: "**", pathMatch: "full", redirectTo:""}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
