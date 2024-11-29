import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private apiUrl = 'http://localhost:8080/api/empresa/registrar';

  constructor(private http: HttpClient) {}

  // Método para registrar una nueva empresa
  registrarEmpresa(empresa: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, empresa);
  }

  
}
