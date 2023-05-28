import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { PerfilComponent } from './pagina/perfil/perfil.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';
import { RevisarProductosComponent } from './pagina/revisar-productos/revisar-productos.component';
import { FavoritoComponent } from './pagina/favorito/favorito.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    CrearProductoComponent,
    BusquedaComponent,
    GestionProductosComponent,
    CarritoComponent,
    PerfilComponent,
    DetalleProductoComponent,
    AlertaComponent,
    RevisarProductosComponent,
    FavoritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
