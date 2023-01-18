import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class UsersService {
  constructor(private http: HttpClient) {}

  login(user: any ): Observable<any> {
    
    return this.http.post("http://localhost:3000/ingresar", user); //enviar post con user y password


  }

  register(user: any): Observable<any> {
    return this.http.post("http://localhost:3000/register", user); //fix create user


  }


}

