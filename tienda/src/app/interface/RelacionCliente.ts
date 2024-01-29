
export interface cliente_articulo{

    artCienteId:number;
    nombre:string;
    apellidos:string ;
     codigo:string;
    descripcion:string;

}

export interface venta{

    id_cliente:number
    articuloId:number;
    clienteId: number;
     fecha:string;

}

export interface tienda_articulo{

    id:number;
    idCliente:number;
    idArticulo:number;
    idTienda:number;
    opcion:number;
    articulo: string;
    tienda:string;
    cliente:string;

}

