
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataTable } from '../../../shared/components/data-table/data-table';
import { TableColumn } from '../../../shared/models/table-column';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { FormDialog } from '../../../shared/components/form-dialog/form-dialog';

import { PageHeader } from '../../../shared/components/page-header/page-header';

interface Appuntamento {
    id: number;
    cliente: string;
    data: string;
    ora: string;
    descrizione: string;
}

@Component({
    selector: 'app-appointments',
    imports: [
        PageHeader,
        ButtonModule,
        InputTextModule,
        ReactiveFormsModule,
        DataTable,
        FormDialog
    ],
    templateUrl: './appointments.html',
    styleUrl: './appointments.scss'
})
export class Appointments {

    dialogVisibile = false;

    appuntamenti: Appuntamento[] = [];

    private prossimoId = 1;

    private readonly fb = new FormBuilder();

    colonne: TableColumn[] = [
        { field: 'cliente', header: 'Cliente' },
        { field: 'data', header: 'Data' },
        { field: 'ora', header: 'Ora' },
        { field: 'descrizione', header: 'Descrizione', sortable: false }
    ];

    appuntamentoForm = this.fb.group({
        cliente: ['', Validators.required],
        data: ['', Validators.required],
        ora: ['', Validators.required],
        descrizione: ['']
    });

    nuovoAppuntamento(): void {
        this.appuntamentoForm.reset();
        this.dialogVisibile = true;
    }

    salvaAppuntamento(): void {
        if (this.appuntamentoForm.invalid) {
            this.appuntamentoForm.markAllAsTouched();
            return;
        }

        const dati = this.appuntamentoForm.getRawValue();

        const appuntamento: Appuntamento = {
            id: this.prossimoId++,
            cliente: dati.cliente!,
            data: dati.data!,
            ora: dati.ora!,
            descrizione: dati.descrizione ?? ''
        };

        this.appuntamenti = [
            ...this.appuntamenti,
            appuntamento
        ];

        console.log('Appuntamento inserito:', appuntamento);

        this.dialogVisibile = false;
        this.appuntamentoForm.reset();
    }

    eliminaAppuntamento(id: number): void {
        this.appuntamenti = this.appuntamenti.filter(
            appuntamento => appuntamento.id !== id
        );
    }

    annulla(): void {
        this.dialogVisibile = false;
        this.appuntamentoForm.reset();
    }
}
