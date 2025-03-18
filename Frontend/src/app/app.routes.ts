import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NuevaTareaComponent } from './components/nueva-tarea/nueva-tarea.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'nueva', component: NuevaTareaComponent },

    { path: '**', component: DashboardComponent }

];
