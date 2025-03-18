import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-editar-tarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-tarea.component.html',
  styleUrl: './editar-tarea.component.css'
})
export class EditarTareaComponent {
  taskId: number;
  newTaskTitle: string;
  newTaskDescription: string;
  status: string;

  constructor(
    private apiService: ApiService,
    private dialogRef: MatDialogRef<EditarTareaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Recibimos la tarea aquí
  ) {
    this.taskId = data.id;
    this.newTaskTitle = data.title;
    this.newTaskDescription = data.description;
    this.status = data.status;
  }

  updateTask() {
    if (this.newTaskTitle.trim() && this.newTaskDescription.trim()) {
      const updatedTask = {
        id: this.taskId, // Asegurar que se envía el ID
        title: this.newTaskTitle,
        description: this.newTaskDescription,
        status: this.status
      };
  
      this.apiService.updateTask(updatedTask).subscribe({
        next: () => {
          alert('Tarea actualizada con éxito');
          this.dialogRef.close(true);
        },
        error: (error) => {
          console.error('Error al actualizar la tarea:', error);
          alert('Hubo un error al actualizar la tarea');
        }
      });
    }
  }
  

  closeModal() {
    this.dialogRef.close(false); // Cierra el modal sin cambios
  }
}
