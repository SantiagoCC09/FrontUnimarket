import { ProductoGetDTO } from "./producto-get-dto";

export class DetalleCompraDTO {
    producto:ProductoGetDTO;
    cantidad:number;
    constructor(producto:ProductoGetDTO, unidades:number){
        this.producto=producto;
        this.cantidad=unidades;
    }
}
