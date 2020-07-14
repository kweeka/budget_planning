import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromIncome from './incomes';

export interface State {
    incomes: fromIncome.State;
}

export const reducers: ActionReducerMap<State> = {
    incomes: fromIncome.reducer
};

export function logger(reducer: ActionReducer<State>):
ActionReducer<State> {
    return (state: State, action: any): State => {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
export const metaReducers: MetaReducer<State>[] = [logger];

export const getIncomesState = createFeatureSelector<fromIncome.State>('incomes');

export const getIds = createSelector(
    getIncomesState,
    fromIncome.getIds,
);

export const getIncomes = createSelector(
    getIncomesState,
    fromIncome.getIncomes,
);

export const getSelected = createSelector(
    getIncomesState,
    fromIncome.getSelected,
);

export const getSelectedIncomes = createSelector(
    getSelected,
    getIncomes,
    (selectedId, incomes) => {
        return {
            ...incomes[selectedId]
        };
    }
);

export const getAllIncomes = createSelector(
    getIds,
    getIncomes,
    (ids, incomes) => {
        return ids.map(id => incomes[id]);
    }
);
