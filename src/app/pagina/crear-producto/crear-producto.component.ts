import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ActivatedRoute } from '@angular/router';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent implements OnInit {
  producto: ProductoGetDTO;
  esEdicion = false;
  codigoProducto = 0;

  categoriasSeleccionadas: string[] = [];
  categorias: any[] = [];

  archivos!: FileList;

  constructor(
    private categoriaService: CategoriaService,
    private productoService: ProductoService,
    private imagenService: ImagenService,
    private route: ActivatedRoute
  ) {
    this.producto = new ProductoGetDTO(0, '', '', 0, 0, [], []);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.codigoProducto = params["codigo"];
      this.productoService.obtener(this.codigoProducto).subscribe((objetoProducto) => {
        if (objetoProducto != null) {
          this.producto = objetoProducto;
          this.esEdicion = true;
          this.cargarCategoriasSeleccionadas();
        }
      });
    });
    this.cargarCategorias();
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
    }
  }

  crearProducto() {
    if (this.producto.imagenes.length > 0) {
      this.productoService.crearProducto(this.producto).subscribe(
        (data) => {
          console.log(data.respuesta);
        },
        (error) => {
          console.log(error.error);
        }
      );
    } else {
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }

  onCategoriaChange(categoria: any) {
    if (categoria.checked) {
      this.categoriasSeleccionadas.push(categoria.nombre);
    } else {
      this.categoriasSeleccionadas = this.categoriasSeleccionadas.filter((cat) => cat !== categoria.nombre);
    }
  }

  cargarCategoriasSeleccionadas() {
    this.categorias.forEach((categoria) => {
      categoria.checked = this.producto.categorias.includes(categoria.nombre);
    });
  }

  cargarCategorias() {
    this.categoriaService.listar().subscribe(
      (data) => {
        this.categorias = data.respuesta;
      },
      (error) => {
        console.log(error.error);
      }
    );
  }

  subirImagenes() {
    if (this.archivos != null && this.archivos.length > 0) {
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe(
        (data) => {
          this.producto.imagenes.push(data.respuesta.url);
        },
        (error) => {
          console.log(error.error);
        }
      );
    } else {
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }
}
