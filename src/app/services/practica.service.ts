import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Practica } from '../models/practica';

@Injectable({
  providedIn: 'root'
})

export class PracticaService {

  private apiUrl = 'http://localhost:8080/api/practica'; // URL del backend para obtener las prácticas

  constructor(private http: HttpClient) {}

  // Método para obtener la lista de prácticas con la información solicitada
  getPracticas(): Observable<Practica[]> {
    return this.http.get<Practica[]>(this.apiUrl);
  }
}
