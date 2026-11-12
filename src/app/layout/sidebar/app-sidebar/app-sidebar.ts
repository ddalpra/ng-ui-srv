import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../../../shared/models/menu-item';


@Component({
    selector: 'app-sidebar',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './app-sidebar.html',
    styleUrl: './app-sidebar.scss'
})
export class AppSidebar {
    generalItems: MenuItem[] = [
        {
            label: 'Dashboard',
            icon: 'pi-home',
            route: '/dashboard'
        },
        {
            label: 'Appuntamenti',
            icon: 'pi-calendar',
            route: '/appointments'
        },
        {
            label: 'Clienti',
            icon: 'pi-users',
            route: '/customers'
        }
    ];

    systemItems: MenuItem[] = [
        {
            label: 'Impostazioni',
            icon: 'pi-cog',
            route: '/settings'
        }
    ];

}