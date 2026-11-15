import { Component, input, output } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-form-dialog',
    standalone: true,
    imports: [
        DialogModule,
        ButtonModule
    ],
    templateUrl: './form-dialog.html',
    styleUrl: './form-dialog.scss'
})
export class FormDialog {

    title = input.required<string>();
    visible = input<boolean>(false);

    width = input<string>('600px');

    saveLabel = input<string>('Salva');
    cancelLabel = input<string>('Annulla');

    visibleChange = output<boolean>();
    save = output<void>();
    cancel = output<void>();
}