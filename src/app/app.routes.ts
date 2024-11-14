import { Routes } from '@angular/router';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { ReporteComponent } from './reporte/reporte.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
    },
    { 
        path: 'solicitudes', 
        component: SolicitudesComponent 
    },
    { 
        path: 'documentacion', 
        component: DocumentacionComponent
    },
    { 
        path: 'reporte', 
        component: ReporteComponent 
    },
    { 
        path: '**', 
        redirectTo: '/home' 
    }
];
