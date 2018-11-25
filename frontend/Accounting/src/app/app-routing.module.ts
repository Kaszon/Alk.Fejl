import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensePageComponent } from './expense-page/expense-page.component';
import { IncomePageComponent } from './income-page/income-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },  // MainPage 
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'income-page', component: IncomePageComponent },
  { path: 'expense-page', component: ExpensePageComponent },
  { path: 'login-page', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
