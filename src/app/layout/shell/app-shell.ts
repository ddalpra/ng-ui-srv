import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppTopbar } from '../topbar/app-topbar/app-topbar';
import { AppSidebar } from '../sidebar/app-sidebar/app-sidebar';

@Component({
    selector: 'app-shell',
    imports: [
        RouterOutlet,
        AppTopbar,
        AppSidebar
    ],
    templateUrl: './app-shell.html',
    styleUrl: './app-shell.scss'
})
export class AppShell {}