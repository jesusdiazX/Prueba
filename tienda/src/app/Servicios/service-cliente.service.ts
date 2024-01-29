import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Cliente, Login } from '../interface/cliente';
import { environment } from 'src/environments/environment';
import { tienda_articulo } from '../interface/RelacionCliente';


@Injectable({
  providedIn: 'root'
})
export class ServiceClienteService {

  
  constructor(private http: HttpClient,
    public dialog: MatDialog 
    ){ }  
  
  
    getClientes(): Observable<Cliente[]> {  
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.get<Cliente[]>(environment.UrlApi + 'get-cliente',{headers: headers });  
    } 
   
  
    getclienteId( ClienteId:number){
    
    let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.get<Cliente>(environment.UrlApi + 'get-clienteId?Id='+ClienteId,{headers: headers });
  
    }
  
    Putcliente( articulo:Cliente){
    articulo.opcion=4;
      let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put<Cliente>(environment.UrlApi + 'upd-cliente',articulo,{headers: headers });
    
      }
  
      PostCliente( cliente:Cliente){
        cliente.opcion=2;
      let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post<Cliente>(environment.UrlApi + 'add-cliente',cliente,{headers: headers });
    
      }
  
      DeleteCliente( ClienteId:number){
    
        let headers = new HttpHeaders().set("Content-Type", "application/json");
          return this.http.delete<Cliente>(environment.UrlApi + 'del-cliente?Id='+ClienteId,{headers: headers });
      
        }


        listaArticuloCliente(){
    
          let headers = new HttpHeaders().set("Content-Type", "application/json");
            return this.http.get<tienda_articulo[]>(environment.UrlApi + 'get-cleinte-articulo',{headers: headers });
        
          }
  
    
      
  
  
}
