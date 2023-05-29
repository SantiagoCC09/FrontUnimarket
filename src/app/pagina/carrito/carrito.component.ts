import { Component } from '@angular/core';
import { DetalleCompraDTO } from 'src/app/modelo/detalle-compra-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos: DetalleCompraDTO[];
  valorTotal: number;
  
  constructor(private carritoService: CarritoService, private productoService: ProductoService) {
    this.productos = [];
    this.valorTotal = 0;
    const listaCodigos = this.carritoService.listar();
    
    if (listaCodigos.length > 0) {
      for (let cod of listaCodigos) {
        this.productoService.obtener(cod).subscribe(
          (data: ProductoGetDTO) => {
            if (data != null) {
              const producto: DetalleCompraDTO = new DetalleCompraDTO(data, 1);
              this.productos.push(producto);
              this.valorTotal += producto.producto.precio;
            }
          },
          (error: any) => {
            console.log(error);
          }
        );
      }
    }
  }

  agregarAlCarrito(producto: DetalleCompraDTO): void {
    this.carritoService.agregar(producto.producto.codigo);
    this.productos.push(producto);
    this.valorTotal += producto.producto.precio;
  }
}
