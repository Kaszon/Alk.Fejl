import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatSelectModule, MatCheckbox, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { PartnerPageComponent } from './components/partner-page/partner-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FinanceTableComponent } from './components/finance-table/finance-table.component';
import { NewItemPageComponent } from './components/new-item-page/new-item-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPartnerPageComponent } from './components/new-partner-page/new-partner-page.component';
import { FinanceTableService } from './services/backend-services/finance.table.service';
import { PartnerService } from './services/backend-services/partner.service';
import { HttpClientModule } from '@angular/common/http';
import { ActorService } from './services/backend-services/actor.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    PartnerPageComponent,
    LoginPageComponent,
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
    MatNativeDateModule,
    HttpClientModule    
  ],
  providers: [FinanceTableService, PartnerService, ActorService], // ezeket lehet beinjectálni (singleton)
  bootstrap: [AppComponent]
})
export class AppModule { }
