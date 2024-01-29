import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente, Log, Login } from "../interface/cliente";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthServiceServiceService {
  isAuthenticated: boolean = false;
  private userSubject!: BehaviorSubject<Login>;
  public user!: Observable<Login>;
  cookies:any="";

  

  constructor(
    private router: Router,
    private http: HttpClient
) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
}


public get userValue() {
    return this.userSubject.value;
}

login02( vents:Login){
  debugger
  let headers = new HttpHeaders().set("Content-Type", "application/json");
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
    return this.http.post(environment.UrlApi +'Seguridad/login',vents,{headers:headers});
    
   

  }

  login03(vents:Login): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    

    };
    let headers = new HttpHeaders().set("Content-Type", "application/json");
   
  
    return this.http.post(
      environment.UrlApi + 'login',event,{headers:headers}
     
      
    );
  }

  



login(login:Log) {
  let headers = new HttpHeaders().set("Content-Type", "application/json");
 debugger
  return this.http.post<Login>(`${environment.UrlApi}seguridad/login`, login,{headers:headers})
      .pipe(map(user => {
        debugger
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token',user.token);
          if(user.token!='')
          this.isAuthenticated=true;
          this.userSubject.next(user);
          return user;
      }));
}
  login0(login:Login) {
    const params = new HttpParams()
    .set('usuario', login.user)
    .set('password', login.pwd)
     return this.http.post<Login>(`${environment.UrlApi}Segurid/token`, login)
         .pipe(map(user => {
                   
             this.isAuthenticated=true;
 
             localStorage.setItem('user', JSON.stringify(user));
             this.userSubject.next(user);
             return user;
         }));
 }
 
 setToken(token: String) {
  localStorage.setItem("token", token.toString());
  console.log(this.cookies);
}
getToken() {
  return localStorage.getItem("token")==null?"":localStorage.getItem("token");
} 

getTuser() {
  return this.cookies.get("user");
} 
  }