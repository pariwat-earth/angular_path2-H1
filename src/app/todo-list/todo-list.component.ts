import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodolistComponent {
  task: Task[] = [];

  taskName: string;
  taskDescription: string;

  addTask() {
    let tempTask: Task = {
      id: this.createUUID(),
      name: this.taskName,
      description: this.taskDescription
    };
    this.task.push(tempTask);
  }

  deletetask(taskComponent: TaskComponent) {
    console.log(taskComponent.taskObj.id);
    this.task = this.task.filter(t => t.id !== taskComponent.taskObj.id);
  }

  createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
       var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
       return v.toString(16);
    });
 }

}
