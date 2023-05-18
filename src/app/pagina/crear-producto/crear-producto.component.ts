import { Component } from '@angular/core';
import { ProductoDTO } from 'src/app/modelo/producto-dto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  producto: ProductoDTO;
  categoriasSeleccionadas: string[] = [];
  categorias: any[] = [
    { nombre: 'Tecnología', checked: false },
    { nombre: 'Hogar', checked: false },
    { nombre: 'Deportes', checked: false },
    { nombre: 'Calzado', checked: false }
  ];
  archivos!: FileList;

  constructor() {
    this.producto = new ProductoDTO();
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      console.log(files);
    }
  }

  public crearProducto() {
    if (this.archivos != null && this.archivos.length > 0) {
      this.producto.categorias = this.categoriasSeleccionadas;
      console.log(this.producto);
    } else {
      console.log('Debe seleccionar al menos una imagen');
    }
  }

  onCategoriaChange(categoria: any) {
    if (categoria.checked) {
      this.categoriasSeleccionadas = [categoria.nombre];
    } else {
      this.categoriasSeleccionadas = this.categoriasSeleccionadas.filter(
        (cat) => cat !== categoria.nombre
      );
    }
  }
}
