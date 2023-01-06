import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { BadgesComponent } from './components/ui/badges/badges.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BottombarComponent } from './components/layout/bottombar/bottombar.component';
import { TooltipComponent } from './components/ui/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BadgesComponent,
    NavbarComponent,
    BottombarComponent,
    TooltipComponent
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