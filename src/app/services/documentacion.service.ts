import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class DocumentacionService {

  private apiUrl = 'http://localhost:8080/api/empresa/'; // Ruta base de la API

  constructor(private http: HttpClient) { }

  // Método para actualizar la empresa
  updateEmpresa(id: number, empresa: Empresa): Observable<Empresa> {
    const url = `${this.apiUrl}actualizar/${id}`;
    return this.http.put<Empresa>(url, empresa);
  }

  // Método para eliminar una empresa por su ID
  deleteEmpresa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}eliminar/${id}`);
  }

  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.apiUrl}listar`);
  }

  private httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
