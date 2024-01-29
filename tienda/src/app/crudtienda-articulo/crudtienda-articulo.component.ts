import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { tienda_articulo } from '../interface/RelacionCliente';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RelacionserviceService } from '../Servicios/relacionservice.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalTienda_articuloComponent } from './modal/modal.component';

@Component({
  selector: 'app-crudtienda-articulo',
  templateUrl: './crudtienda-articulo.component.html',
  styleUrls: ['./crudtienda-articulo.component.css']
})
export class CrudtiendaArticuloComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'articulo', 'tienda','Acciones'];
  dataSource = new MatTableDataSource<tienda_articulo>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  arrayclientes:tienda_articulo[]=[];
  
  constructor(private service:RelacionserviceService,
    public dialog: MatDialog
    ) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data=this.arrayclientes;
  }

  ngOnInit() {
    // this.ArrayArticulo=this.service.getAllEmployee().subscribe(res=>this.ArrayArticulo=res);

    this.dataSource.paginator = this.paginator;
    this.gettiedaarticulos();
 

 }
 gettiedaarticulos() {
    this.service.gettiedaarticulos().subscribe({
      next:(rest)=>{
        console.log(rest);
        this.dataSource.data=rest;
        
  
      }
    });  
  }

  
  onRowClicked(id:any, tipo:any,idtienda:any,idarticulo:any): void {
    let type;
    let infoDet = [];
debugger

    let datos: any = {};
    switch (tipo) {
      case 0: type = 'Nuevo';
       this.openModal(id,type, [],0,0);
        break;
      case 1:
        type = "Detalle";

        this.openModal(id, type, [],0,0);
        break;

      case 2:
        type = 'Editar';

       this.openModal(id, type,[],idarticulo,idtienda);

        break;
      case 3:

        type = 'Eliminar';
        
        
          const dialogNRef = this.dialog.open(ModalTienda_articuloComponent, {
           
            disableClose: true,
            data: { id: id,type: type}
          });
          dialogNRef.afterClosed().subscribe(result => {
      debugger
      console.log(result);
           this.gettiedaarticulos();
      
          });
        
   
        break;


    }
  }

  private openModal(id: number, tipo: string, info: Array<any>,idart:any,idt:any): void {

    const dialogNRef = this.dialog.open(ModalTienda_articuloComponent, {
      width: '1140px',
      disableClose: true,
      data: { id: id,type: tipo, info: info,idart:idart,idt:idt }
    });
    dialogNRef.afterClosed().subscribe(result => {

     this.gettiedaarticulos();

    });
  }


}
