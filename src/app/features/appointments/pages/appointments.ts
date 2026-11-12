
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { PageHeader } from '../../../shared/components/page-header/page-header';

@Component({
    selector: 'app-appointments',
    imports: [
        PageHeader,
        ButtonModule
    ],
    templateUrl: './appointments.html',
    styleUrl: './appointments.scss'
})
export class Appointments {

    nuovoAppuntamento(): void {
        console.log('Nuovo appuntamento');
    }

}
