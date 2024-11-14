import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf, NgStyle } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SolicitudesService } from '../services/solicitudes.service';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule, InputTextModule, ButtonModule,NgStyle],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent {
  solicitudes: any[] = []; // Variable para almacenar las solicitudes
  value: string = ''; // Variable vinculada con ngModel para el campo de búsqueda

}
