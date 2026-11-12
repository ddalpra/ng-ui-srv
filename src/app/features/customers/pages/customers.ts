import { Component } from '@angular/core';
import { PageHeader } from '../../../shared/components/page-header/page-header';

@Component({
    selector: 'app-customers',
    imports: [PageHeader],
    templateUrl: './customers.html',
    styleUrl: './customers.scss'
})
export class Customers {}