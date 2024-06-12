import { Injectable } from '@angular/core';
import { Task } from '../model/interface/Task';
import { TaskImpl } from '../model/Class/TaskImpl';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    this.loadTasks();
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(taskName: string): void {
    const uniqueId = Date.now();
    const newTask = new TaskImpl(uniqueId, taskName, Date.now(), false);
    console.log('task saved');
    this.tasks.push(newTask);
    console.log(this.tasks)
    this.saveTasksToLocalStorage();
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
      this.saveTasksToLocalStorage();
    }
  }

  completeTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks[index].completed = !this.tasks[index].completed;
      this.saveTasksToLocalStorage();
    }
  }

  private saveTasksToLocalStorage(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    } else {
      console.warn('localStorage is not available.');
    }
  }

  private loadTasks(): void {
    if (this.isLocalStorageAvailable()) {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        this.tasks = JSON.parse(storedTasks) as Task[];
      } else {
        this.tasks = [];
      }
    } else {
      console.warn('localStorage is not available.');
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = 'test';
      localStorage.setItem(testKey, 'testValue');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}
