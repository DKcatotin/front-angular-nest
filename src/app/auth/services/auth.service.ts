import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { enviroment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl=enviroment.urlServidor

  private http=inject(HttpClient)
  constructor() {}
  loginConNest(credenciales: any){
    return this.http.post<any>(`${this.baseUrl}/auth/login`,credenciales);
  }

  registroConNest(datos:any){
    return this.http.post<any>(`${this.baseUrl}/register`,datos);
  }
}

