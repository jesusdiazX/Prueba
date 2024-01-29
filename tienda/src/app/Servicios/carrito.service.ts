import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '../interface/Iarticulo';
import { cliente_articulo, tienda_articulo, venta } from '../interface/RelacionCliente';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  constructor(private http: HttpClient
    
    ) {
  }

  public Carrito:Articulo[]=[];

  Postventa( vents:tienda_articulo){
    debugger
    let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.post<cliente_articulo>(environment.UrlApi +'add-cliente-articulo',vents,{headers: headers });
  
    }


  }

