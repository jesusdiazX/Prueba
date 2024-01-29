import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable, map, take } from 'rxjs';  
import { environment } from 'src/environments/environment';
import { Articulo } from '../interface/Iarticulo';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class ServiceArticuloService {
    
  constructor(private http: HttpClient,
  public dialog: MatDialog 
  ){ }  


  getArticulos(): Observable<Articulo[]> {  
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<Articulo[]>(environment.UrlApi + 'get-articulo',{headers: headers });  
  } 
 

  getArticuloId( articloId:number){
  
  let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<Articulo>(environment.UrlApi + 'get-articuloId?id='+articloId,{headers: headers });

  }

  PutArticulo( articulo:Articulo){
  
    let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.put<Articulo>(environment.UrlApi + 'upd-articulo',articulo,{headers: headers });
  
    }

  PostArticulo( articulo:Articulo){
  
    let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.post<Articulo>(environment.UrlApi + 'add-articulo',articulo,{headers: headers });
  
    }

    DeleteArticulo( articloId:number){
  
      let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.delete<Articulo>(environment.UrlApi + 'del-articulo?Id='+articloId,{headers: headers });
    
      }


      
    DeleteArticulor( articloId:number){
  
      let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.delete<Articulo>(environment.UrlApi + 'del-articulo?Id='+articloId,{headers: headers });
    
      }


      imageUrlToBase64(urL: string) {
        return this.http.get(urL, {
            observe: 'body',
            responseType: 'arraybuffer',
          })
          .pipe(
            take(1),
            map((arrayBuffer) =>
              btoa(
                Array.from(new Uint8Array(arrayBuffer))
                .map((b) => String.fromCharCode(b))
                .join('')
              )
            ),
          )
      }


      cargarArchivo(dato: FormData):Observable<any> {
        const headers = new Headers();
      
      headers.append('Accept', '*/*');
        headers.append('Content-Type', 'multipart/form-data');
        
        const httpOptions = {
          headers: new HttpHeaders()
        };
        const url = environment.UrlApi + `articulo/UploadFile`;
        const resultado = this.http.post(url,dato, httpOptions);
        return resultado;
      }
      


}


