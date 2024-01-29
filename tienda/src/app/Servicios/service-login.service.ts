import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Cliente, Login } from '../interface/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {

  constructor(private http: HttpClient,
    public dialog: MatDialog 
    ){ } 



  getlogin( loguin:Login){
    
    let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.post<Cliente>(environment.UrlApi + 'Login/loginCliente',loguin);
  
    }
}
