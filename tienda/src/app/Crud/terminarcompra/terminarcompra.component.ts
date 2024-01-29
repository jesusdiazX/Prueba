import { Component } from '@angular/core';
import { CarritoService } from 'src/app/Servicios/carrito.service';
import { Articulo } from 'src/app/interface/Iarticulo';
import { tienda_articulo, venta } from 'src/app/interface/RelacionCliente';
import { Cliente } from 'src/app/interface/cliente';

@Component({
  selector: 'app-terminarcompra',
  templateUrl: './terminarcompra.component.html',
  styleUrls: ['./terminarcompra.component.css']
})
export class TerminarcompraComponent {
  dato:any;
  public productos:Articulo[] = [];
  public cliente:venta={
    id_cliente: 0,

    fecha: '',
    clienteId: 0,
    articuloId: 0
  } 

  
  compraTerminada:boolean | undefined
  myObjStr: Cliente={
    id_cliente: 0,
    nombre: '',
    apellidos: '',
    direccion: 0,
    email:'',
    opcion:0
    
  };
  dato2: any;
  dato3:tienda_articulo={
    id: 0,
    idCliente: 0,
    idArticulo: 0,
    idTienda: 0,
    opcion: 0,
    articulo: '',
    tienda: '',
    cliente: ''
  };
  constructor(private carritoService: CarritoService,) {

    this.dato= localStorage.getItem("user");
    console.log(this.dato)
  }
  public columnas = ['descripcion', 'precio', 'quitar'];
 
  public async quitar(producto:Articulo) {
    //await this.carritoService.quitarProducto(producto.articuloId);
  //  await this.obtenerProductos();
    // Comunicación entre componentes
   // this.dataSharingService.changeMessage("car_updated");
  }


  DatosCliente(evento:any){
debugger
    this.dato= localStorage.getItem("user");
    console.log(this.dato)

  }
  
  public async revisarYTerminar(stepper:any) {
  
    debugger
    this.productos=this.carritoService.Carrito;

        let perfil = JSON.parse(localStorage.getItem("user")!);




        console.log(perfil)
        console.log(this.productos);

        

    //  this.carritoService.Carrito
    //  .forEach(element => {
    //   this.cliente.clienteId=perfil.clienteId;
    //  this.cliente.articuloId=element.articuloId
    //  this.cliente.fecha!=null;

    this.productos.forEach(element => {  
      this.dato3.idArticulo=element.id_art;
      this.dato3.idTienda=perfil.id;
      this.dato3.opcion=2;

      this.carritoService.Postventa(this.dato3).subscribe({
        next:(rest)=>{
          this.carritoService.Carrito=[];
          
    this.compraTerminada=true;
      stepper.next();
    
         
          console.log("Respuesta Guardado")
  
        }
      });  
    });

    

   
      
   //  });
    
 
    


  }
  
  
  public total() {
    let total = 0;
    this.productos.forEach(p => total += p.precio);
    return total;
  }


   ngOnInit() {
   this.productos=this.carritoService.Carrito;
   
     this.dato= localStorage.getItem("user");
     console.log(this.dato)
    
  }

 
}
