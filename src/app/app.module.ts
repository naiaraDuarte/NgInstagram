import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/ui/sidebar/sidebar.component';
import { BadgesComponent } from './components/ui/badges/badges.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BadgesComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }