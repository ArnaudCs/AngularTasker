import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../model/interface/Task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  tasks: Task[] = [];
  addedTask?: string;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  saveTask() {
    if (this.addedTask) {
      this.taskService.addTask(this.addedTask);
      this.tasks = this.taskService.getTasks();
      this.addedTask = '';
    } else {
      console.log('La tâche est vide');
    }
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
    this.tasks = this.taskService.getTasks();
  }

  completeTask(task: Task) {
    this.taskService.completeTask(task);
    this.tasks = this.taskService.getTasks();
  }

  getFormattedDate(epoch: number): string {
    return this.convertEpochToDate(epoch);
  }

  convertEpochToDate(epoch: number): string {
    const date = new Date(epoch);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Les mois vont de 0 à 11, donc ajoutez 1
    const year = date.getFullYear();

    // Formatage de la date avec deux chiffres pour le jour et le mois
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  }
}
