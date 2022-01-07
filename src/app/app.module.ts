import { rootRouterConfig } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BoardsPageComponent } from './components/boards-page/boards-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutKanbanPageComponent } from './components/about-kanban-page/about-kanban-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Error404Component } from './components/error404/error404.component';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    BoardsPageComponent,
    ContactPageComponent,
    AboutKanbanPageComponent,
    FooterComponent,
    Error404Component
  ],
  imports: [
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    [ RouterModule.forRoot(rootRouterConfig, {useHash: true})],
    TooltipModule.forRoot(),
    SortableModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxNavbarModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
