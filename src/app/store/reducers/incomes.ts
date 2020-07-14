import { Action } from '@ngrx/store';
import * as IncomeAction from '../actions/income';
import { Income } from '../../models/income';


export interface State {
    ids: number[];
    incomes: { [id: number]: Income };
    selected: number;
}

export const initialState: State = {
    ids: [1, 2],
    incomes: {
        1: {
            id: 1,
            name: 'Зарплата',
            description: 'Зарплата Игоря'
        },
        2: {
            id: 2,
            name: 'Премия',
            description: 'Премия Игоря'
        },
    },
    selected: null,
};

export function reducer(state = initialState, action: IncomeAction.Action) {
    switch (action.type) {
        case IncomeAction.ADD_ONE: {
            const newIncome: Income = action.payload;
            return {
                ...state,
                ids: [...state.ids, newIncome.id],
                income: { ...state.incomes, newIncome }
            };
        }
        case IncomeAction.SELECT: {
            const id = action.payload;
            return {
                ...state,
                selected: id
            };
        }
        default:
            return state;
    }
}

export const getIds = (state: State) => state.ids;
export const getIncomes = (state: State) => state.incomes;
export const getSelected = (state: State) => state.selected;


