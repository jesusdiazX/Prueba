import { Component, ViewChild,OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatDialog } from '@angular/material/dialog';
import { Cliente } from 'src/app/interface/cliente';
import { ServiceClienteService } from 'src/app/Servicios/service-cliente.service';
import { ModalClienteComponent } from '../modal-cliente/modal-cliente.component';
import { ModalDeleteComponent } from 'src/app/Dialogs/modal-delete/modal-delete.component';
import { DeleteModalClienteComponent } from '../delete-modal-cliente/delete-modal-cliente.component';



@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements AfterViewInit {
  displayedColumns: string[] = ['id_cliente', 'nombre', 'apellidos', 'direccion','Acciones'];
  dataSource = new MatTableDataSource<Cliente>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  arrayclientes:Cliente[]=[];
  
  constructor(private service:ServiceClienteService,
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
    this.GerClientes();
 

 }
  GerClientes() {
    this.service.getClientes().subscribe({
      next:(rest)=>{
        console.log(rest);
        this.dataSource.data=rest;
        
  
      }
    });  
  }

  
  onRowClicked(id:any, tipo:any): void {
    let type;
    let infoDet = [];
debugger

    let datos: any = {};
    switch (tipo) {
      case 0: type = 'Nuevo';
       this.openModal(id,type, []);
        break;
      case 1:
        type = "Detalle";

        this.openModal(id, type, []);
        break;

      case 2:
        type = 'Editar';

       this.openModal(id, type,[]);

        break;
      case 3:

        type = 'Eliminar';
        
        
          const dialogNRef = this.dialog.open(DeleteModalClienteComponent, {
           
            disableClose: true,
            data: { id: id,type: type}
          });
          dialogNRef.afterClosed().subscribe(result => {
      debugger
      console.log(result);
           this.GerClientes();
      
          });
        
   
        break;


    }
  }


  private openModal(id: number, tipo: string, info: Array<any>): void {

    const dialogNRef = this.dialog.open(ModalClienteComponent, {
      width: '1140px',
      disableClose: true,
      data: { id: id,type: tipo, info: info }
    });
    dialogNRef.afterClosed().subscribe(result => {

     this.GerClientes();

    });
  }


}
