import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class UsersService {
  public name: any;
  constructor(private http: HttpClient) {}

  login(user: any ): Observable<any> {
    this.name= user;
    
    return this.http.post("http://localhost:3000/ingresar", user); //enviar post con user y password


  }

  register(user: any): Observable<any> {
    return this.http.post("http://localhost:3000/register", user); //fix create user


  }

  view(){
    return this.http.get("http://localhost:3000/admin")

  }

  update(user: any): Observable<any> {
    return this.http.post("http://localhost:3000/{{user.id}}", user); //fix update user


  }

  delete(user: any): Observable<any> {
    return this.http.post("http://localhost:3000/{{user.id}}", user); //fix delete user


  }
   

}

