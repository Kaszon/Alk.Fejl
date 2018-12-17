import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { PartnerPageComponent } from './components/partner-page/partner-page.component';
import { NewItemPageComponent } from './components/new-item-page/new-item-page.component';
import { CanActivateViaAuthGuard } from './routeguards/authentication.guard';
import { NewPartnerPageComponent } from './components/new-partner-page/new-partner-page.component';
import { AuthenticationService } from './services/backend-services/authentication.service';
import { FinanceTableComponent } from './components/finance-table/finance-table.component';

const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },  
  { path: 'partner-page', component: PartnerPageComponent, canActivate: [CanActivateViaAuthGuard] },  
  { path: 'profile-page', component: ProfilePageComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'finance-table', component: FinanceTableComponent, canActivate: [CanActivateViaAuthGuard] },  
  { path: 'finance-table/new-item-page', component: NewItemPageComponent, canActivate: [CanActivateViaAuthGuard]}, 
  { path: 'partner-page/new-partner-page', component: NewPartnerPageComponent, canActivate: [CanActivateViaAuthGuard]}, 
  { path: '', redirectTo: 'login-page', pathMatch : 'full' } // ha tényleg nincs az url-ben megadva semmi
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationService, CanActivateViaAuthGuard], // ezeket lehet beinjectálni (singleton)

})
export class AppRoutingModule { }
