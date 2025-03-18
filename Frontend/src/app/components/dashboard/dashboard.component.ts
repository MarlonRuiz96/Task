import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { NuevaTareaComponent } from '../nueva-tarea/nueva-tarea.component';
import { EditarTareaComponent } from '../editar-tarea/editar-tarea.component';

@Component({
  selector: 'app-dashboard',
  standalone  : true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  tasks: any = [];



  newTaskTitle: string = '';

  constructor(private apiservice: ApiService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadTasks(); // Cargar tareas al iniciar
  }

  openModal() {
    const dialogRef = this.dialog.open(NuevaTareaComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadTasks(); // Recargar tareas si se añadió una nueva
      }
    });
  }

  openEditModal(task: any) {
    const dialogRef = this.dialog.open(EditarTareaComponent, {
      width: '400px',
      data: task // Pasamos la tarea al modal
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadTasks(); // Recargar tareas si hubo una actualización
      }
    });
  }

  loadTasks() {
    this.apiservice.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }


  addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask = {
        id: this.tasks.length + 1,
        title: this.newTaskTitle,
        completed: false
      };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
    }
  }

  deleteTask(id: number) {
    this.apiservice.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task: { id: number; }) => task.id !== id);
    });
  }

  updateTask(task: { id: number; completed: boolean; }) {
    this.apiservice.updateTask(task).subscribe(() => {
      this.loadTasks(); // Recargar tareas al actualizar
    });
  }


}
