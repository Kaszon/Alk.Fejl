import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { FinancePageComponent } from './finance-page/finance-page.component';
import { FinanceTableComponent } from './finance-table/finance-table.component';


const appRoutes: Routes = [
  { path: 'profile-page', component: ProfilePageComponent },  
  { path: 'finance-page', component: FinancePageComponent },
  { path: 'partner-page', component: PartnerPageComponent },
  { path: 'login-page', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProfilePageComponent,
    FinancePageComponent,
    PartnerPageComponent,
    LoginPageComponent,
    SidebarComponent,
    DetailsComponent,    
    FinancePageComponent, FinanceTableComponent
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
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
