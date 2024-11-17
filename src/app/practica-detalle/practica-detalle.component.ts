import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-practica-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practica-detalle.component.html',
  styleUrl: './practica-detalle.component.css'
})
export class PracticaDetalleComponent {
  @Output() close = new EventEmitter<void>();

  cerrarModal() {
    this.close.emit();
  }
}
