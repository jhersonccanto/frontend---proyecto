import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  private apiUrl = 'http://localhost:8080/api/practica';
  constructor(private http: HttpClient) { }

  // Método para obtener todas las solicitudes
  getSolicitudes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
