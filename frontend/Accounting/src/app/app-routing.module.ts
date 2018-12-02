import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { PartnerPageComponent } from './components/partner-page/partner-page.component';
import { DetailsComponent } from './components/details/details.component';
import { FinancePageComponent } from './components/finance-page/finance-page.component';
import { NewItemPageComponent } from './components/new-item-page/new-item-page.component';
import { NewPartnerPageComponent } from './components/new-partner-page/new-partner-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'partner-page', component: PartnerPageComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'finance-page', component: FinancePageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'finance-page/new-item-page', component: NewItemPageComponent}, 
  { path: 'partner-page/new-partner-page', component: NewPartnerPageComponent}, 
  { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
