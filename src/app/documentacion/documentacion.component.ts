import { CommonModule, NgIf, NgStyle } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { EmpresaComponent } from "../empresa/empresa.component";
import { TableModule } from "primeng/table";
import { DocumentacionService } from "../services/documentacion.service";
import { DialogModule } from "primeng/dialog";
import { Empresa } from "../models/empresa";
import { Router } from "@angular/router";

@Component({
  selector: 'app-documentacion',
  standalone: true,
  imports: [EmpresaComponent,DialogModule, TableModule, CommonModule, NgIf, FormsModule, InputTextModule, ButtonModule, NgStyle],
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent implements OnInit {

  empresas: Empresa[] = []; // Ahora usando el tipo Empresa
  modalAbierto: boolean = false;
  empresaEditada: Empresa = new Empresa(0,'', '', '', '', '', '', '', '', '', '', '', ''); // Iniciar con una instancia de Empresa
  displayDialog: boolean = false;

  constructor(private empresaService: DocumentacionService, private router: Router) { }

  ngOnInit(): void {
    this.empresaService.getEmpresas().subscribe(data => {
      this.empresas = data;
    });
  }

  onEdit(empresa: Empresa) {
    this.empresaEditada = { ...empresa };  // Asegurarse de crear una copia
    this.displayDialog = true;
  }

  onSave() {
    if (this.empresaEditada && this.empresaEditada.id) {
      const id = this.empresaEditada.id;
      this.empresaService.updateEmpresa(id, this.empresaEditada).subscribe(
        response => {
          const index = this.empresas.findIndex(empresa => empresa.id === id);
          if (index !== -1) {
            this.empresas[index] = { ...this.empresaEditada };  // Actualizamos la empresa editada
          }
          this.displayDialog = false;  // Cerramos el modal
        },
        error => {
          console.error("Error al actualizar la empresa:", error);
        }
      );
    }
  }
  
  

  onCancel() {
    this.displayDialog = false; // Cerrar el modal sin guardar cambios
  }

  abrirModal() {
    this.modalAbierto = true; // Abrir modal
  }

  cerrarModal() {
    this.modalAbierto = false; // Cerrar modal

    this.router.navigate(['/documentacion']);
    // Opcional: Recargar la lista de empresas (o cualquier otra acción)
    this.refreshPage();
  }

  refreshPage() {
    // Vuelves a cargar las empresas (puedes hacerlo según tus necesidades)
    this.empresaService.getEmpresas().subscribe(data => {
      this.empresas = data;
    });
  }

  // Función para eliminar una empresa
  onDelete(id: number) {
    console.log(`Eliminar empresa con ID: ${id}`);  // Aquí puedes agregar un mensaje en la consola

    this.empresaService.deleteEmpresa(id).subscribe(
      response => {
        console.log("Empresa eliminada exitosamente", response); // Mensaje de confirmación en consola
        // Eliminamos la empresa de la lista localmente
        this.empresas = this.empresas.filter(empresa => empresa.id !== id);
      },
      error => {
        console.error("Error al eliminar la empresa", error); // Mensaje de error en consola
      }
    );
  }
}
