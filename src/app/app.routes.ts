import { AboutKanbanPageComponent } from './components/about-kanban-page/about-kanban-page.component';
import { Routes } from "@angular/router";
import { BoardsPageComponent } from "./components/boards-page/boards-page.component";
import { ContactPageComponent } from "./components/contact-page/contact-page.component";
import { HomePageComponent } from "./components/home-page/home-page.component";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'boards', component: BoardsPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'about-kanban', component: AboutKanbanPageComponent}
]
