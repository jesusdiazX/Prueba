import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tienda_articulo } from '../interface/RelacionCliente';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelacionserviceService {

  constructor(private http: HttpClient,
    public dialog: MatDialog 
    ){ }  
  
  
    gettiedaarticulos(): Observable<tienda_articulo[]> { 

      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.get<tienda_articulo[]>(environment.UrlApi + 'get-tienda-articulo',{headers: headers });  
    } 

      
    PutTienda( articulo:tienda_articulo){
    articulo.opcion=4
      let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put<tienda_articulo>(environment.UrlApi + 'upd-tienda-articulo',articulo,{headers: headers });
    
      }
  
      PostTienda( cliente:tienda_articulo){
        cliente.opcion=2;
      let headers = new HttpHeaders().set("Content-Type", "application/json");
          cliente.opcion=2;
        return this.http.post<tienda_articulo>(environment.UrlApi + 'add-tienda-articulo',cliente,{headers: headers });
    
      }
  
      DeleteTienda( ClienteId:number){
     
      console.log('idcliente' +ClienteId.toString());
        let headers = new HttpHeaders().set("Content-Type", "application/json");
          return this.http.delete<tienda_articulo>(environment.UrlApi + 'del-tienda-articulo?id='+ClienteId,{headers: headers });
      
        }

   
}
