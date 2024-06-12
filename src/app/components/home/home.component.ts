import { Component } from '@angular/core';
import { Task} from '../../model/interface/Task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, TaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
}
