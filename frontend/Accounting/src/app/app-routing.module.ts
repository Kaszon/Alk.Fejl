import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { DetailsComponent } from './details/details.component';
import { FinancePageComponent } from './finance-page/finance-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },  // MainPage 
  { path: 'partner-page', component: PartnerPageComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'finance-page', component: FinancePageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
