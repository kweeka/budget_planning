import { Action as ActionStore } from '@ngrx/store';
import { Income } from '../../models/income';

export const SELECT = '[Income] Select';
export const ADD_ONE = '[Income] Add One';

export class Select implements ActionStore {
    readonly type = SELECT;
    constructor(public payload: number) { }
}

export class AddOne implements ActionStore {
    readonly type = ADD_ONE;
    constructor(public payload: Income) { }
}

export type Action = AddOne | Select;
