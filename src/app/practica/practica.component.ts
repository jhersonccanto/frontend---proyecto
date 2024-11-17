import { CommonModule, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PracticaService } from '../services/practica.service';
import { Practica } from '../models/practica';
import { PracticaDetalleComponent } from '../practica-detalle/practica-detalle.component';

@Component({
  selector: 'app-practica',
  standalone: true,
  imports: [PracticaDetalleComponent,CommonModule,NgIf,NgFor,FormsModule, InputTextModule, ButtonModule,NgStyle],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent implements OnInit{
  practicas: Practica[] = []; // Variable tipada como un arreglo de Solicitud
  value: string = ''; // Variable vinculada con ngModel para el campo de búsqueda
  constructor(private practicaService: PracticaService) {}

  modalAbierta = false;

  ngOnInit(): void {
    this.practicaService.getPracticas().subscribe((data) => {
      this.practicas = data; // La respuesta del backend se asigna a 'practicas'
    });
  }

  abrirModal() {
    this.modalAbierta = true;
  }

  cerrarModal() {
    this.modalAbierta = false;
  }
}
