import { Injectable } from '@angular/core';
import { ProductoGetDTO } from '../modelo/producto-get-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: ProductoGetDTO[];
  constructor() {
    this.productos = [];
    this.productos.push(new ProductoGetDTO(1, "Televisor LG 4K", "Televisor LG 2023 UHD", 3500000, 2,
      ["https://www.lg.com/co/images/televisores/md07527619/gallery/dm-1.jpg"], ["TECNOLOGIA"]));
    this.productos.push(new ProductoGetDTO(2, "Tenis Nike", "Tenis Nike importados, version USA", 650000, 4,
      ["https://prochampions.vtexassets.com/arquivos/ids/502183-800-auto?v=637807376553370000&width=800&height=auto&aspect=true"], ["ROPA", "DEPORTE"]));
    //CREE OTROS PRODUCTOS (AL MENOS 6 MÁS)
    //https://th.bing.com/th/id/OIP.3FWx2mInDdp3ZlMTs-8TLgHaIq?pid=ImgDet&w=849&h=994&rs=1
    this.productos.push(new ProductoGetDTO(3, "Oneplus 9 5G", "Teléfono 12/256gb, snapdragon 888, Amoled 120hz", 2200000, 1,
      ["https://th.bing.com/th/id/OIP.3FWx2mInDdp3ZlMTs-8TLgHaIq?pid=ImgDet&w=849&h=994&rs=1"], ["TECNOLOGIA"]));
      //https://th.bing.com/th/id/R.01bc5e52a9d6819cc8aa83524acb412f?rik=CrltNxQ1wlzLtQ&pid=ImgRaw&r=0
      this.productos.push(new ProductoGetDTO(4, "iPhone 14 Black", "Teléfono iPhone 14, 128gb, A16 Bionic, eSIM", 4200000, 1,
      ["https://th.bing.com/th/id/R.01bc5e52a9d6819cc8aa83524acb412f?rik=CrltNxQ1wlzLtQ&pid=ImgRaw&r=0"], ["TECNOLOGIA"]));
  }
  public listar(): ProductoGetDTO[] {
    return this.productos;
  }
}