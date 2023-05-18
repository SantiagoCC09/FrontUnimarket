import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';
@Component({
selector: 'app-busqueda',
templateUrl: './busqueda.component.html',
styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent{
  productos:ProductoGetDTO[];
  filtro:ProductoGetDTO[];
  
  textoBusqueda:string;
  constructor(private route:ActivatedRoute, private productoServicio:ProductoService){
    this.productos=this.productoServicio.listar();
    this.filtro=[];
    this.textoBusqueda = "";
    this.route.params.subscribe(params => {
      this.textoBusqueda = params["texto"];
      this.filtro = this.productos.filter( p =>
      p.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) );
      });
  }
}