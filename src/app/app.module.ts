import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {Routes, RouterModule} from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';


import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthComponent} from './auth/auth.component';
import {BannerComponent} from './banner/banner.component';
import {IncomeItemComponent} from './incomes/income-item';
import {IncomeListComponent} from './incomes/income-list';
import {IncomeSelectedComponent} from './incomes/income-selected';

const itemRoutes: Routes = [
  { path: 'reg', component: RegistrationComponent},
  { path: 'auth', component: AuthComponent},
];

const appRoutes: Routes = [
    {path: 'main', component: MainComponent},
    {path: 'main', component: MainComponent, children: itemRoutes},
    {path: '', component: BannerComponent}
    ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    RegistrationComponent,
    AuthComponent,
    BannerComponent,
    IncomeItemComponent,
    IncomeListComponent,
    IncomeSelectedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
