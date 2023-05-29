import { Component, OnInit} from '@angular/core';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']


})


export class InicioComponent implements OnInit {
  productos: ProductoGetDTO[];

  /*

  categorias = [
    { nombre: 'Tecnología', checked: false },
    { nombre: 'Hogar', checked: false },
    { nombre: 'Deporte', checked: false },
    { nombre: 'Ropa', checked: false },
    { nombre: 'Calzado', checked: false },
  ];
  */

  categorias: any[] = [];

  constructor(private productoServicio: ProductoService, private categoriaServicio: CategoriaService, private detalleServicio: DetalleProductoComponent, private carritoServicio: CarritoService) {
    categoriaServicio.listar();
    this.productos = [];
    this.cargarCategorias();
  }

  ngOnInit(): void {
    this.productos = this.productoServicio.listarQuemados();
    this.cargarCategorias();
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
    this.detalleServicio.agregarCarrito();
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
