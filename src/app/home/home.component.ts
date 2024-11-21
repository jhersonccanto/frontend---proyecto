import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ SidebarModule, NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Solicitudes', icon: 'pi pi-file', routerLink: '/practica' },
      { label: 'Documentación', icon: 'pi pi-folder', routerLink: '/supervisor' },
      { label: 'Reporte', icon: 'pi pi-chart-line', routerLink: '/reporte' },
      { label: 'Configuración', icon: 'pi pi-cog', routerLink: '/configuracion' },
      { label: 'Cerrar sesión', icon: 'pi pi-power-off', routerLink: '/logout' }
    ];
  }
}
