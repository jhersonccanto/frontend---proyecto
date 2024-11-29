import { CommonModule } from "@angular/common";
import { Component, Output, EventEmitter, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EmpresaService } from "../services/empresa.service";
import { Empresa } from "../models/empresa";
import { Router } from "@angular/router";


@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.css'
})
export class EmpresaComponent{
  @Input() empresa: Empresa = new Empresa(0, '', '', '', '', '', '', '', '', '', '', '', '');
  @Output() close = new EventEmitter<void>(); // Emite un evento para cerrar el modal

  // Definimos la variable empresa que se usará para el formulario
   Empresa = {
    id:0,
    nombreEmpresa: '',
    rucEmpresa: '',
    telefonoEmpresa: '',
    correoEmpresa: '',
    departamentoUbigeo: '',
    provinciaUbigeo: '',
    distritoUbigeo: '',
    direccionEmpresa: '',
    nombreRepresentante: '',
    cargoRepresentante: '',
    correoRepresentante: '',
    telefonoRepresentante: ''
  };

  showConfirmation: boolean = false; // Controla la visibilidad del cuadro de confirmación

  constructor(private empresaService: EmpresaService, private router: Router // Inyecta Router para redirigir
    ) {}

  // Método para cerrar el modal
  cerrarModal() {
    console.log('Cerrar modal');
    this.close.emit(); // Emitimos el evento para cerrar el modal
  }

  // Método para guardar la empresa
  // Método para guardar la empresa
  guardarEmpresa() {
    this.empresaService.registrarEmpresa(this.empresa).subscribe({
      next: (response) => {
        // Muestra un mensaje de éxito en consola
        console.log('Empresa registrada con éxito', response);
        
        // Muestra el modal de confirmación
        this.showConfirmation = true;

        // Cierra el formulario (puedes agregar lógica para limpiar el formulario)
        this.limpiarFormulario();
      },
      error: (error) => {
        // Muestra un mensaje de error en consola
        console.error('Error al registrar la empresa', error);
      }
    });
  }

  // Método para limpiar el formulario
  limpiarFormulario() {
    this.empresa = {
      id: 0,
      nombreEmpresa: '',
      rucEmpresa: '',
      telefonoEmpresa: '',
      correoEmpresa: '',
      departamentoUbigeo: '',
    provinciaUbigeo: '',
    distritoUbigeo: '',
    direccionEmpresa: '',
    nombreRepresentante: '',
    cargoRepresentante: '',
    correoRepresentante: '',
    telefonoRepresentante: ''
    };
  }
  
// Método para redirigir a la página de Documentación
redirigir() {
  this.showConfirmation = false; // Esto debe cerrar el modal
  this.router.navigate(['/documentacion']); // Redirige al componente que lista las empresas
}



// Cerrar el modal sin redirigir
onClose() {
  this.close.emit();  // Emitimos la empresa cuando se cierra el modal
}


onSave() {
  console.log('Guardando empresa:', this.empresa);
  this.close.emit();  // Emitimos la empresa cuando se guarda
}


onCancel() {
  this.close.emit();  // Solo emite el cierre sin guardar cambios
}

}
