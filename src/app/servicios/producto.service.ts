import { Injectable } from '@angular/core';
import { ProductoGetDTO } from '../modelo/producto-get-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: ProductoGetDTO[];
  constructor() {
    this.productos = [];
    this.productos.push(new ProductoGetDTO(1, "Televisor LG 4K", "Descripcion 1", 3500000, 2,
      ["https://www.lg.com/co/images/televisores/md07527619/gallery/dm-1.jpg"], ["TECNOLOGIA"]));
    this.productos.push(new ProductoGetDTO(2, "Tenis Nike", "Descripcion 2", 650000, 4,
      ["https://prochampions.vtexassets.com/arquivos/ids/502183-800-auto?v=637807376553370000&width=800&height=auto&aspect=true"], ["ROPA", "DEPORTE"]));
    //CREE OTROS PRODUCTOS (AL MENOS 6 MÁS)
  }
  public listar(): ProductoGetDTO[] {
    return this.productos;
  }
}