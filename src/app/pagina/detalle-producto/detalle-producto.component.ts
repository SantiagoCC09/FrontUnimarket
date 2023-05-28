import { Component } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {
  codigoProducto: any;

  constructor(private carritoServicio: CarritoService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.codigoProducto = params["codigo"];
    });
  }

  public agregarCarrito() {
    this.carritoServicio.agregar(this.codigoProducto);
  }
}
