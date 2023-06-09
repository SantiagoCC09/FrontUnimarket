import { Component } from '@angular/core';
import { DetalleCompraDTO } from 'src/app/modelo/detalle-compra-dto';
import { FavoritoService } from 'src/app/servicios/favorito.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent {
  productos: DetalleCompraDTO[];
  valorTotal: number;
  constructor(private favoritoService: FavoritoService, private productoService: ProductoService) {
    this.productos = [];
    this.valorTotal = 0;
    const listaCodigos = this.favoritoService.listar();
    if (listaCodigos.length > 0) {
      for (let cod of listaCodigos) {
        this.productoService.obtener(cod).subscribe(
          data => {
            const producto: ProductoGetDTO = data;
            if (producto != null) {
              this.productos.push(new DetalleCompraDTO(producto, 1));
              this.valorTotal += producto.precio;
            }
          },
          error => {
            console.log(error.error);
          }
        );
      }
    }
  }
}
