import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import 'hammerjs';

import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatGridListModule,
  MatDividerModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatTableModule,
  MatSelectModule,
  MatListModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RenewalsService } from './renewals.service';
import { RenewaldetailsComponent } from './renewaldetails/renewaldetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RenewaldetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatGridListModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatTableModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [
    RenewalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
