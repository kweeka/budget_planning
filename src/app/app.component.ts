import { Component } from '@angular/core';
import { Income } from './models/income';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers/index';
import * as incomeAction from './store/actions/income';
import { Observable } from 'rxjs/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  incomes$: Observable<Income[]>;
  selected$: Observable<Income>;

  constructor(private store: Store<fromRoot.State>) {
    this.incomes$ = store.select(fromRoot.getAllIncomes);
    this.selected$ = store.select(fromRoot.getSelectedIncomes);
  }

  onSelect(id: number) {
    this.store.dispatch(new incomeAction.Select(id));
  }
}
