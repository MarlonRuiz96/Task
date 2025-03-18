import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nueva-tarea.component.html',
  styleUrl: './nueva-tarea.component.css'
})
export class NuevaTareaComponent {
  newTaskTitle: string = '';
  newTaskDescription: string = '';
  status: string = 'Por hacer';

  constructor(
    private apiService: ApiService,
    private dialogRef: MatDialogRef<NuevaTareaComponent> // Inyectamos MatDialogRef
  ) {}

  addTask() {
    if (this.newTaskTitle.trim() && this.newTaskDescription.trim()) {
      const newTask = {
        title: this.newTaskTitle,
        description: this.newTaskDescription,
        status: this.status
      };

      this.apiService.createTask(newTask).subscribe({
        next: (response) => {
          console.log('Tarea agregada:', response);
          alert('Tarea agregada con éxito');
          this.dialogRef.close(true); // Cerrar modal y enviar `true` para indicar éxito
        },
        error: (error) => {
          console.error('Error al agregar la tarea:', error);
          alert('Hubo un error al agregar la tarea');
        }
      });
    }
  }

  closeModal() {
    this.dialogRef.close(false); // Cierra el modal sin agregar tarea
  }
}
