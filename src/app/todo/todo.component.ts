import { Component } from '@angular/core';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title: string = 'Todo tasks';
  

  highPriorityTaskList: any = [];
  mediumPriorityTaskList: any = [];
  lowPriorityTaskList: any = [];
  
  addTask(task: any) {
    switch(task.taskPriority) {
      case 1: {
        this.highPriorityTaskList = [...this.highPriorityTaskList, {...task}];
        break;
      }
      case 2: {
        this.mediumPriorityTaskList = [...this.mediumPriorityTaskList, {...task}];
        break;
      }
      case 3: {
        this.lowPriorityTaskList = [...this.lowPriorityTaskList, {...task}];
        break;
      }
      default: {
        console.log('Unexpected priority');
      }
    }
  }
}