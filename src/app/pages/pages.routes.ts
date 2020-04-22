import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard', descripcion: 'Dashboard econatura'} }, // la propiedad data es opcional sirve para cualquier cosa / es recomendable que sea un objeto para mas información
            { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress', descripcion: 'Progress econatura'} },
            { path: 'graficas1', component: Graficas1Component, data: {titulo: 'Graficas', descripcion: 'Graficas econatura'} },
            { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas', descripcion: 'Promesas econatura'} },
            { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs', descripcion: 'Rxjs econatura'} },
            { path: 'account-settings', component: AccoutSettingsComponent, data: {titulo: 'Settings theme', descripcion: 'econatura'} },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
