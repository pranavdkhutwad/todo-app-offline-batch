import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {
  @Input() task: any;
  getTaskHeaderClass(priority: number) {
    switch(priority) {
      case 1: {
        return 'high-priority';
      }
      case 2: {
        return 'medium-priority';
      }
      case 3: {
       return 'low-priority';
      }
      default: {
        return '';
      }
    }
  }
}
