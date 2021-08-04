import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardRouterComponent } from './modules/dashboard/dashboard-router.component';
import { DashboardHomeComponent } from './modules/dashboard/dashboard-home/dashboard-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardRouterComponent,
    DashboardHomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
