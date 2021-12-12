import { Component, EventEmitter, Output } from '@angular/core';

interface Task {
  taskName: string,
  taskDescription: string,
  taskPriority: number | null
};

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() addTaskEvent: any = new EventEmitter();

  task: Task = {
    taskName: '',
    taskDescription: '',
    taskPriority: null
  };

  addTask() {
    this.addTaskEvent.emit(this.task);
  }
}
