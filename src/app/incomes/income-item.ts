import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Income } from '../models/income';

@Component({
    selector: 'app-income-item',
    template: `<div>{{income.name}}</div>`,
    styles: [`
        div {
            width: 100%;
            height: 100%;
        }`]
})
export class IncomeItemComponent implements OnInit {
    @Input() income: Income;
    constructor() { }
    ngOnInit() {
    }
}
