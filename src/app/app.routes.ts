import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./features/dashboard/pages/dashboard')
                .then(m => m.Dashboard)
    },
    {
        path: 'appointments',
        loadComponent: () =>
            import('./features/appointments/pages/appointments')
                .then(m => m.Appointments)
    },
    {
        path: 'customers',
        loadComponent: () =>
            import('./features/customers/pages/customers')
                .then(m => m.Customers)
    },
    {
        path: 'settings',
        loadComponent: () =>
            import('./features/settings/pages/settings')
                .then(m => m.Settings)
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];