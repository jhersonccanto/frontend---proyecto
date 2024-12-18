import { Routes } from '@angular/router';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { ReporteComponent } from './reporte/reporte.component';
import { PracticaComponent } from './practica/practica.component';
import { PracticaDetalleComponent } from './practica-detalle/practica-detalle.component';
import { EmpresaComponent } from './empresa/empresa.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
    },
    { 
        path: 'practica', 
        component: PracticaComponent 
    },
    { 
        path: 'practica-detalle', 
        component: PracticaDetalleComponent
    },
    { 
        path: 'documentacion', 
        component: DocumentacionComponent
    },
    { 
        path: 'empresa', 
        component: EmpresaComponent
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
