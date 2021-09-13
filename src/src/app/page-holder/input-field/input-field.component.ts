import { Component, ElementRef, OnInit } from '@angular/core';
import { Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent implements OnInit {
  @Output() addNewTaskItem = new EventEmitter<string>();

  constructor() {}

  alertClass: string = 'hide';

  newTask: string = '';

  ngOnInit(): void {}

  resetNewTask() {
    this.newTask = '';
  }

  addNewTask(value: string) {
    if (!value) {
      this.alertClass = 'show';
      setTimeout(() => {
        this.alertClass = 'hide';
      }, 2000);
    } else {
      this.addNewTaskItem.emit(this.newTask);
      this.resetNewTask();
    }
  }
}
