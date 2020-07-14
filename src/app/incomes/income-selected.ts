import { Component, OnInit, Input } from '@angular/core';
import { Income } from '../models/income';

@Component({
    selector: 'app-income-selected',
    template: `
            <div *ngIf="income && income.name" >
                <div>{{income.name}}</div>
            </div>
            `,
})

export class IncomeSelectedComponent implements OnInit {
    @Input() income: Income;
    constructor() { }

    ngOnInit() {
    }

}