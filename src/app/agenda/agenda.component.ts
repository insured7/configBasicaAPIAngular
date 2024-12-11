import { Component } from '@angular/core';
import { AgendaService } from '../servicios/agenda.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [NgFor],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  users: any;

  constructor(private agendaService : AgendaService) { }

  ngOnInit() {
    this.agendaService.getUsers().subscribe(data => {
      this.users = data.data; // Asumiendo que la respuesta tiene una propiedad 'data'
    });
  }
}
