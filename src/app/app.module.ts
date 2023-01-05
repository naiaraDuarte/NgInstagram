import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/ui/sidebar/sidebar.component';
import { BadgesComponent } from './components/ui/badges/badges.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BottombarComponent } from './components/ui/bottombar/bottombar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BadgesComponent,
    NavbarComponent,
    BottombarComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }