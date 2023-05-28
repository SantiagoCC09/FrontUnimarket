import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { PerfilComponent } from './pagina/perfil/perfil.component';
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';
import { RolesService } from './guards/roles.service';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';
import { RevisarProductosComponent } from './pagina/revisar-productos/revisar-productos.component';


const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "login", component: LoginComponent },

  { path: "registro", component: RegistroComponent },
  { path: "crear-producto", component: CrearProductoComponent },
  { path: "busqueda/:texto", component: BusquedaComponent },
  { path: "carrito", component: CarritoComponent },
  { path: "gestion", component: GestionProductosComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "editar-producto/:codigo", component: CrearProductoComponent },
  { path: "**", pathMatch: "full", redirectTo: "" },
  {
    path: "crear-producto", component: CrearProductoComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["CLIENTE"]
    }
  },
  {
    path: "editar-producto/:codigo", component: CrearProductoComponent, canActivate:
      [RolesGuard], data: { expectedRole: ["CLIENTE"] }
  },
  {
    path: "gestionar-productos", component: GestionProductosComponent, canActivate:
      [RolesGuard], data: { expectedRole: ["CLIENTE"] }
  },
  { path: "revisar-productos", component: RevisarProductosComponent, canActivate: [RolesGuard],
data: { expectedRole: ["MODERADOR"] } },
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "registro", component: RegistroComponent, canActivate: [LoginGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
