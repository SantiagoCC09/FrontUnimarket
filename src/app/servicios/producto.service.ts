import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { Observable } from 'rxjs';
import { ProductoDTO } from '../modelo/producto-dto';
import { ProductoGetDTO } from '../modelo/producto-get-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productoURL = "http://localhost:8080/api/productos";
  productos: ProductoGetDTO[];
  productoSeleccionado: ProductoGetDTO;

  constructor(private http: HttpClient) {
    this.productos = [];
    this.productoSeleccionado = new ProductoGetDTO(0, '', '', 0, 0, [], []);
    this.productos.push(new ProductoGetDTO(1, "Televisor LG 4K", "Televisor LG 2023 UHD", 3500000, 2,
      ["https://www.lg.com/co/images/televisores/md07527619/gallery/dm-1.jpg"], ["TECNOLOGIA"]));
    this.productos.push(new ProductoGetDTO(2, "Tenis Nike", "Tenis Nike importados, version USA", 650000, 4,
      ["https://prochampions.vtexassets.com/arquivos/ids/502183-800-auto?v=637807376553370000&width=800&height=auto&aspect=true"], ["ROPA", "DEPORTE"]));
    this.productos.push(new ProductoGetDTO(3, "Oneplus 9 5G", "Teléfono 12/256gb, snapdragon 888, Amoled 120hz", 2200000, 1,
      ["https://th.bing.com/th/id/OIP.3FWx2mInDdp3ZlMTs-8TLgHaIq?pid=ImgDet&w=849&h=994&rs=1"], ["TECNOLOGIA"]));
    this.productos.push(new ProductoGetDTO(4, "iPhone 14 Black", "Teléfono iPhone 14, 128gb, A16 Bionic, eSIM", 4200000, 1,
      ["https://th.bing.com/th/id/R.01bc5e52a9d6819cc8aa83524acb412f?rik=CrltNxQ1wlzLtQ&pid=ImgRaw&r=0"], ["TECNOLOGIA"]));
  }

  public listar(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.productoURL}/listar`);
  }

  public obtener(codigo: number): Observable<ProductoGetDTO> {
    return this.http.get<ProductoGetDTO>(`${this.productoURL}/obtener/${codigo}`);
  }
  

  public crearProducto(producto: ProductoGetDTO): Observable<MensajeDTO> {
    const usuarioCodigo = 1; // Código del usuario que realiza la creación del producto
    producto.codigo = usuarioCodigo;
    return this.http.post<MensajeDTO>(`${this.productoURL}/crear`, producto);
  }

  public editarProducto(producto: ProductoGetDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.productoURL}/editar`, producto);
  }

  private obtenerUltimoCodigo(): number {
    const ultimaPosicion = this.productos.length - 1;
    return this.productos[ultimaPosicion].codigo;
  }
}
