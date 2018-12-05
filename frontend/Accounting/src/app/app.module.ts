import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatSelectModule, MatCheckbox, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { FinancePageComponent } from './components/finance-page/finance-page.component';
import { PartnerPageComponent } from './components/partner-page/partner-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DetailsComponent } from './components/details/details.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FinanceTableComponent } from './components/finance-table/finance-table.component';
import { NewItemPageComponent } from './components/new-item-page/new-item-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPartnerPageComponent } from './components/new-partner-page/new-partner-page.component';
import { CanActivateViaAuthGuard } from './routeguards/authentication.guard';
import { AuthenticationService } from './services/backend-services/authentication.service';
import { DataService } from './services/backend-services/data.service';
import { Http, HttpModule } from '@angular/http';
import { FinanceTableService } from './services/backend-services/finance.table.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    FinancePageComponent,
    PartnerPageComponent,
    LoginPageComponent,
    DetailsComponent,
    SidebarComponent,
    FinanceTableComponent,
    NewItemPageComponent,
    NewPartnerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,    
    HttpModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule, 
    MatCheckboxModule,
    MatChipsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  providers: [DataService,FinanceTableService], // ezeket lehet beinjectálni (singleton)
  bootstrap: [AppComponent]
})
export class AppModule { }
