import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

export interface userRequest {
  nombre: string;
  apellidos: string;
  correo: string;
  contrasena: string;
  rol: "ADMIN" | "ROL" | "CLIENTE"
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  registro(datos: any): Observable<userRequest> {
    return this.http.post<userRequest>(`${environment.apiUrl}/registro`, datos);
  }

  login(datos: any): Observable<userRequest> {
    return this.http.post<userRequest>(`${environment.apiUrl}/login`, datos);
  }
}
