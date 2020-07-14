import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { Income } from '../models/income';
import {IncomeClass} from '../models/incomeClass';


@Component({
    selector: 'app-income-list',
    template: `
        <div>
            <div *ngFor="let income of incomes" role="listitem" (click)="select.emit(income.id)">
                <app-income-item [income]="income"></app-income-item>
            </div>
        </div>
        <input [(ngModel)]="newIncome.id"/>
        <input [(ngModel)]="newIncome.name"/>
        <input [(ngModel)]="newIncome.description"/>
        <button (click)="select.emit(newIncome)"></button>
    `,
})

export class IncomeListComponent implements OnInit, OnChanges {
    @Input() incomes: Income[];
    @Input() label: string;
    @Input() newIncome: Income;
    @Output() select = new EventEmitter();

    constructor() {
        this.newIncome = new IncomeClass();
    }

    ngOnInit() {
    }

    ngOnChanges(changes) {
    }

}