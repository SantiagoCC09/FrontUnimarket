import { Component, OnInit } from '@angular/core';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  productos: ProductoGetDTO[];
  categorias: any[] = [
    { nombre: 'Tecnología', checked: false },
    { nombre: 'Hogar', checked: false },
    { nombre: 'Deportes', checked: false },
    { nombre: 'Ropa', checked: false },
    { nombre: 'Calzado', checked: false },
  ];

  constructor(private productoServicio: ProductoService, private categoriaServicio:CategoriaService) {
    this.productos = [];
    this.cargarCategorias();
  }

  ngOnInit(): void {
    this.productos = this.productoServicio.listarQuemados();
    this.productoServicio.listar().subscribe(
      data => {
        this.productos = data.respuesta;
        console.log("Cargados correctamente");
      },
      error => {
        console.log(error.error);
        console.log("Error, estan quemados");
      }
    );
  }

  agregarAlCarrito(producto: ProductoGetDTO) {
    // Aquí puedes implementar la lógica para agregar el producto al carrito
    // Por ejemplo, llamar a un servicio o actualizar el estado del carrito en tu aplicación
    console.log('Producto agregado al carrito:', producto);
  }

  private cargarCategorias() {
    this.categoriaServicio.listar().subscribe(
      (data) => {
        this.categorias = data.respuesta;
        console.log("Categorias cargadas inicio");
      },
      (error) => {
        console.log(error.error);
        console.log("Error categorias cargadas inicio");
      }
    );
  }
}
