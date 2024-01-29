import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Tienda } from '../interface/cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrTiendaService {

  constructor(private http: HttpClient,
    public dialog: MatDialog 
    ){ }  
  
  
    getTienda(): Observable<Tienda[]> {  
      let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.get<Tienda[]>(environment.UrlApi + 'get-tiendas',{headers: headers });  
    } 
   
  
    getclienteId( ClienteId:number){
    
    let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.get<Tienda>(environment.UrlApi + 'get-tiendaÍd?id='+ClienteId,{headers: headers });
  
    }
  
    PutTienda( articulo:Tienda){
    
      let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put<Tienda>(environment.UrlApi + 'upd-tienda',articulo,{headers: headers });
    
      }
  
      PostTienda( cliente:Tienda){
    
      let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post<Tienda>(environment.UrlApi + 'add-tienda',cliente,{headers: headers });
    
      }
  
      DeleteTienda( ClienteId:number){
      console.log('idcliente' +ClienteId.toString());
        let headers = new HttpHeaders().set("Content-Type", "application/json");
          return this.http.delete<Tienda>(environment.UrlApi + 'del-tienda?id='+ClienteId,{headers: headers });
      
        }


       

}
