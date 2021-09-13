import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../task-item';

@Component({
  selector: 'app-page-holder',
  templateUrl: './page-holder.component.html',
  styleUrls: ['./page-holder.component.css'],
})
export class PageHolderComponent implements OnInit {
  taskItemList: Array<TaskItem> = [];

  constructor() {}

  ngOnInit(): void {}

  createTask(value: string) {
    const taskItem: TaskItem = {
      id: this.taskItemList.length + 1,
      task: value,
      isDone: false,
    };
    this.addItem(taskItem);
  }
  addItem(newTask: TaskItem) {
    this.taskItemList.push(newTask);
  }

  updateItemList(updatedItem: TaskItem) {
    for (let i = 0; i < this.taskItemList.length; i++) {
      if (this.taskItemList[i].id == updatedItem.id) {
        this.taskItemList[i] = updatedItem;
      }
    }
  }

  sortList() {
    this.taskItemList = this.taskItemList.sort((a, b) =>
      a.isDone > b.isDone ? 1 : -1
    );
  }
}
