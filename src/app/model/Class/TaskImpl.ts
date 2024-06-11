import { Task } from '../interface/Task';

//implémenter les getters et setters
export class TaskImpl implements Task {
    constructor(
      public id: number,
      public text: string,
      public createdAt: number,
      public completed: boolean
    ) {

    }

    getId(): number {
      return this.id;
    }

    setId(id: number): void {
      this.id = id;
    }

    getText(): string {
      return this.text;
    }

    setText(text: string): void {
      this.text = text;
    }

    getCreatedAt(): number {
      return this.createdAt;
    }

    setCreatedAt(createdAt: number): void {
      this.createdAt = createdAt;
    }

    getCompleted(): boolean {
      return this.completed;
    }

    setCompleted(completed: boolean): void {
      this.completed = completed;
    }

}