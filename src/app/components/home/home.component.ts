import { Component } from '@angular/core';
import { Task} from '../../model/interface/Task';
import { TaskImpl } from '../../model/Class/TaskImpl';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { writeFile } from 'fs';
import * as taskData from '../../model/data/tasks.json'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tasks: Task[] = [...taskData.tasks];
  addedTask?: string;

  saveTask() {
    if(this.addedTask) {
      let uniqueId = Date.now();
      let newTask = new TaskImpl( uniqueId , this.addedTask, Date.now(), false);
      this.tasks.push(newTask);
      this.addedTask = '';
    } else {
      console.log('La tache est vide');
    }
  }

  deleteTask(task: Task) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  completeTask(task: Task) {
    let index = this.tasks.indexOf(task);
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
