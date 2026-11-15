
import { Component, input, output } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { TableColumn } from '../../models/table-column';

@Component({
    selector: 'app-data-table',
    standalone: true,
    imports: [
        TableModule,
        ButtonModule,
        InputTextModule
    ],
    templateUrl: './data-table.html',
    styleUrl: './data-table.scss'
})
export class DataTable<T extends object> {

    columns = input.required<TableColumn[]>();
    data = input.required<T[]>();

    rows = input<number>(10);
    emptyMessage = input<string>('Nessun elemento presente.');

    showEdit = input<boolean>(false);
    showDelete = input<boolean>(true);

    edit = output<T>();
    delete = output<T>();

    getCellValue(row: T, field: string): unknown {
        return (row as Record<string, unknown>)[field];
    }

    get globalFilterFields(): string[] {
        return this.columns().map(column => column.field);
    }
}
