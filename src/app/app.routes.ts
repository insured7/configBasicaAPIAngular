import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';

export const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: '**', redirectTo: ''}
];
