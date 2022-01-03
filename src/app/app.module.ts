import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BoardsPageComponent } from './components/boards-page/boards-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutKanbanPageComponent } from './components/about-kanban-page/about-kanban-page.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    BoardsPageComponent,
    ContactPageComponent,
    AboutKanbanPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
