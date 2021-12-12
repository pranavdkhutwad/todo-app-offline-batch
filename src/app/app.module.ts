import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoTaskComponent } from './todo/components/todo-task/todo-task.component';
import { TodoTaskListComponent } from './todo/components/todo-task-list/todo-task-list.component';
import { TodoFormComponent } from './todo/components/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoTaskComponent,
    TodoTaskListComponent,
    TodoFormComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
