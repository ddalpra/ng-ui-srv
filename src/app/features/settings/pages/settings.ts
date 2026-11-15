
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

import { PageHeader } from '../../../shared/components/page-header/page-header';
import { DataTable } from '../../../shared/components/data-table/data-table';
import { FormDialog } from '../../../shared/components/form-dialog/form-dialog';
import { TableColumn } from '../../../shared/models/table-column';

interface Impostazione {
    id: number;
    codice: string;
    descrizione: string;
    valore: string;
    categoria: string;
}

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [
        PageHeader,
        DataTable,
        FormDialog,
        ButtonModule,
        InputTextModule,
        SelectModule,
        ReactiveFormsModule
    ],
    templateUrl: './settings.html',
    styleUrl: './settings.scss'
})
export class Settings {

    private readonly fb = new FormBuilder();

    dialogVisibile = false;
    modalitaModifica = false;
    impostazioneId: number | null = null;

    categorie = [
        { label: 'Generale', value: 'Generale' },
        { label: 'Sistema', value: 'Sistema' },
        { label: 'Notifiche', value: 'Notifiche' },
        { label: 'Sicurezza', value: 'Sicurezza' }
    ];

    colonne: TableColumn[] = [
        { field: 'codice', header: 'Codice' },
        { field: 'descrizione', header: 'Descrizione' },
        { field: 'valore', header: 'Valore' },
        { field: 'categoria', header: 'Categoria' }
    ];

    impostazioni: Impostazione[] = [
        {
            id: 1,
            codice: 'APP_NAME',
            descrizione: 'Nome applicazione',
            valore: 'Hubrix',
            categoria: 'Generale'
        },
        {
            id: 2,
            codice: 'DEFAULT_LANGUAGE',
            descrizione: 'Lingua predefinita',
            valore: 'Italiano',
            categoria: 'Generale'
        },
        {
            id: 3,
            codice: 'TABLE_PAGE_SIZE',
            descrizione: 'Elementi per pagina',
            valore: '10',
            categoria: 'Sistema'
        },
        {
            id: 4,
            codice: 'EMAIL_NOTIFICATIONS',
            descrizione: 'Notifiche email',
            valore: 'Attive',
            categoria: 'Notifiche'
        }
    ];

    private prossimoId = 5;

    impostazioneForm = this.fb.nonNullable.group({
        codice: ['', Validators.required],
        descrizione: ['', Validators.required],
        valore: ['', Validators.required],
        categoria: ['Generale', Validators.required]
    });

    nuovaImpostazione(): void {
        this.modalitaModifica = false;
        this.impostazioneId = null;
        this.impostazioneForm.reset({
            codice: '',
            descrizione: '',
            valore: '',
            categoria: 'Generale'
        });
        this.dialogVisibile = true;
    }

    modificaImpostazione(impostazione: Impostazione): void {
        this.modalitaModifica = true;
        this.impostazioneId = impostazione.id;

        this.impostazioneForm.patchValue({
            codice: impostazione.codice,
            descrizione: impostazione.descrizione,
            valore: impostazione.valore,
            categoria: impostazione.categoria
        });

        this.dialogVisibile = true;
    }

    salvaImpostazione(): void {
        if (this.impostazioneForm.invalid) {
            this.impostazioneForm.markAllAsTouched();
            return;
        }

        const valore = this.impostazioneForm.getRawValue();

        if (this.modalitaModifica && this.impostazioneId !== null) {
            this.impostazioni = this.impostazioni.map(item =>
                item.id === this.impostazioneId
                    ? { ...item, ...valore }
                    : item
            );
        } else {
            const nuova: Impostazione = {
                id: this.prossimoId++,
                codice: valore.codice!,
                descrizione: valore.descrizione!,
                valore: valore.valore!,
                categoria: valore.categoria!
            };

            this.impostazioni = [...this.impostazioni, nuova];
        }

        this.annulla();
    }

    eliminaImpostazione(impostazione: Impostazione): void {
        this.impostazioni = this.impostazioni.filter(
            item => item.id !== impostazione.id
        );
    }

    annulla(): void {
        this.dialogVisibile = false;
        this.impostazioneForm.reset();
        this.impostazioneId = null;
        this.modalitaModifica = false;
    }
}
