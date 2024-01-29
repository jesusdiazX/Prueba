import { Component, Inject ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceArticuloService } from 'src/app/Servicios/service-articulo.service';
import { Articulo } from 'src/app/interface/Iarticulo';

@Component({
  selector: 'app-modal-articulos',
  templateUrl: './modal-articulos.component.html',
  styleUrls: ['./modal-articulos.component.css']
})
export class ModalArticulosComponent  implements OnInit {
  form!:FormGroup;
  title!: string;
  Imagen: any;
  uploadedImage: any;
  files: any;
  imagenPrevia: any;
  sanitizer: any;
  base64Image: string | undefined;
   archivo!: Archivo;
   archivosServer!: Archivo;
   lastPK!: number;
  constructor(
    public _globalService: ServiceArticuloService,
    private spinner: NgxSpinnerService,
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalArticulosComponent>,
    @Inject(MAT_DIALOG_DATA) public sharedData: any
  ) {


  }

  ngOnInit(): void {
    this.title =this.sharedData["type"];
 

    this.form = this._fb.group({

      
      id_art: [0],
      codigo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      imagen: [''],
      unidad: [''],
      
    


  });


  switch (this.title) {
    case 'Editar':

 this.Editarproductos();



        break;
    case 'Nuevo':


        break;

    case 'Detalle':

        break;

}



  }


  
  Editarproductos(){
    
 
    
    
    this._globalService.getArticuloId( this.sharedData.id ).subscribe({
      next:(rest)=>{
        console.log(rest);
        this.setValues(rest);
        

      }
    });  
 
    
    
    
    }

    
setValues( articulo:Articulo){



  this.form.patchValue({
    articuloId: articulo.id_art,
    codigo:articulo.codigo,
    descripcion: articulo.descripcion,
    precio:articulo.precio,
    stock:articulo.stock
  

  })
  this.Imagen=articulo.imagen;
  
}
  save(Form: Articulo) {

  
    this.spinner.show();

    let route: string;
    let Method:string;
 
    if (this.sharedData['type'] === 'Nuevo') {
        route = 'productos/NuevoProducto';
         Method='POST';
        
         this._globalService.PostArticulo( this.form.value).subscribe({
          next:(rest)=>{
            console.log(rest);
           
            this.dialogRef.close();

          
              this.spinner.hide();
          


    
          }
        }); 



    } else {
      this._globalService.PutArticulo( this.form.value).subscribe({
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


 onFileSelected(event: any) {
debugger
  const imagen = event.target.files[0];
  console.log(imagen);

  this._globalService.imageUrlToBase64('assets/img/'+imagen.name).subscribe(
    base64 => {
        this.base64Image = base64
})
  if (['image'].includes(imagen.type)) {
    console.log('Si es una imagen');
    this.files.push(imagen)
    debugger
  
 
  } else {
    
  }
}

fileEvent(fileInput:any) {
  
  //let file = (<HTMLInputElement>fileInput.target).files[0];
  const file = fileInput.target.files[0];
  
  const formData = new FormData();
  formData.append('file', file);

  if (file.type == "image/jpeg" || file.type == "image/png") {
    this.archivo = new Archivo(this.lastPK + 1, file.name, file.type);
    this._globalService.cargarArchivo(formData).subscribe(res=> {


      debugger
      console.log(res);
       this.Imagen = res.imagen;
         this.form.patchValue({ imagen: this.Imagen });
       


    });
  }
}


}



export class Archivo {
  constructor(
    public id: number,
    public nombre: string,
    public imagen: string
  ) {}
}
