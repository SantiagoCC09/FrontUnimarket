import { Component, OnInit } from '@angular/core';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  productos: ProductoGetDTO[];

  constructor(private productoServicio: ProductoService) {
    this.productos = [];
  }

  ngOnInit(): void {
    this.productoServicio.listar().subscribe(
      data => {
        this.productos = data.respuesta;
      },
      error => {
        console.log(error.error);
      }
    );
  }

  agregarAlCarrito(producto: ProductoGetDTO) {
    // Aquí puedes implementar la lógica para agregar el producto al carrito
    // Por ejemplo, llamar a un servicio o actualizar el estado del carrito en tu aplicación
    console.log('Producto agregado al carrito:', producto);
  }
}
