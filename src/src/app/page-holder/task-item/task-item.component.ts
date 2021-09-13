import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskItem } from 'src/app/task-item';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: string = '';
  @Input()
  isDone: boolean = false;
  @Input() id: Number = 0;
  @Output() updateItemEvent = new EventEmitter<TaskItem>();

  constructor() {}

  ngOnInit(): void {}

  updateItem() {
    const updatedItem = {
      task: this.task,
      id: this.id,
      isDone: !this.isDone,
    };
    this.updateItemEvent.emit(updatedItem);
  }
}
