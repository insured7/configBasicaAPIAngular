import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgendaComponent } from "./agenda/agenda.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgendaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba1API';
}
