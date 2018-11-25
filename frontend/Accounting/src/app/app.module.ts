import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { IncomePageComponent } from './income-page/income-page.component';
import { ExpensePageComponent } from './expense-page/expense-page.component';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'income-page', component: IncomePageComponent },
  { path: 'expense-page', component: ExpensePageComponent },
  { path: 'partner-page', component: PartnerPageComponent },
  { path: 'login-page', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProfilePageComponent,
    IncomePageComponent,
    ExpensePageComponent,
    PartnerPageComponent,
    LoginPageComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
