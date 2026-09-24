import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Appointments } from './pages/appointments/appointments';
import { Customers } from './pages/customers/customers';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'appointments',
        component: Appointments
    },
    {
        path: 'customers',
        component: Customers
    },
    {
        path: 'settings',
        component: Settings
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];