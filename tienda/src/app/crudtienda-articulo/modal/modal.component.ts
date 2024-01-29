import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { CrTiendaService } from 'src/app/Servicios/cr-tienda.service';
import { RelacionserviceService } from 'src/app/Servicios/relacionservice.service';
import { ServiceArticuloService } from 'src/app/Servicios/service-articulo.service';
import { tienda_articulo } from 'src/app/interface/RelacionCliente';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalTienda_articuloComponent {
  form!:FormGroup;
  title!: string;
  Imagen: any;
  uploadedImage: any;
  files: any;
  imagenPrevia: any;
  sanitizer: any;
  base64Image: string | undefined;
  tienda: any;
  selecTienda:any;
  selecArticulo:any;
  Articulos:any;
 
  constructor(
    public _globalService: RelacionserviceService,
    public _articuloService:ServiceArticuloService,
    public _tiendaService: CrTiendaService,
    private spinner: NgxSpinnerService,
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalTienda_articuloComponent>,
    @Inject(MAT_DIALOG_DATA) public sharedData: any
  ) {


  }


  ngOnInit(): void {
    this.title =this.sharedData["type"];
    this.getArticulos();

    this.form = this._fb.group({
      id: [this.sharedData["id"]],
      idtienda: [this.sharedData["idt"] ],
      idarticulo: [this.sharedData["idart"]],
     
      
    


  });


  this.GetTienda();
  switch (this.title) {
    case 'Editar':




        break;
    case 'Nuevo':


        break;

    case 'Detalle':

        break;
        
}



  }


  save(Form: tienda_articulo){
    
    if (this.sharedData['type'] === 'Nuevo') {
      const route = 'productos/NuevoProducto';
       const Method='POST';
       this.form.value.id=0;
       this.form.value.cliente="";
       this.form.value.tienda="";
       this.form.value.articulo="";
       this.form.value.idcleite=0;
       this.form.value.idcleite=0;
       this._globalService.PostTienda( this.form.value).subscribe({
        next:(rest)=>{
          console.log(rest);
         
          this.dialogRef.close();

        
            this.spinner.hide();
        


  
        }
      }); 



  } else {
    this.form.value.cliente="";
    this.form.value.tienda="";
    this.form.value.articulo="";
    this.form.value.idcleite=0;
    this.form.value.opcion=4;

    this._globalService.PutTienda( this.form.value).subscribe({
      next:(rest)=>{
        console.log(rest);
       
        this.dialogRef.close();
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);

        


      }
    }); 

  }


  }

  GetTienda() {
    debugger
    this._tiendaService.getTienda().subscribe({
      next:(rest)=>{
        console.log(rest);
        this.tienda=rest;
        
  
      }
    });  
}

getArticulos(){

  this._articuloService.getArticulos().subscribe({
    next:(rest)=>{
      console.log(rest);
     this.Articulos=rest;

    }
  });  

}


 
}
