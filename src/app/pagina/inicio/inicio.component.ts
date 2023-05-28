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
    { nombre: 'Deporte', checked: false },
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
  cargarProductos() {
    this.productos = this.productoServicio.listarQuemados();
    this.productoServicio.listar().subscribe(
      data => {
        this.productos = data.respuesta;
        console.log("Productos cargados correctamente");
      },
      error => {
        console.log(error.error);
        console.log("Error al cargar los productos");
      }
    );
  }

  filtrarProductos() {
    const categoriasSeleccionadas = this.categorias.filter(categoria => categoria.checked).map(categoria => categoria.nombre);
    if (categoriasSeleccionadas.length > 0) {
      this.productos = this.productoServicio.listarQuemados().filter(producto =>
        producto.categorias.some(categoria => categoriasSeleccionadas.includes(categoria))
      );
    } else {
      this.cargarProductos();
    }
  }
  
}
