import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task: Task = { id: 0, title: '', state: false };
  @Output() eventRemove = new EventEmitter<Task>();
  @Output() eventDone = new EventEmitter<Task>();

  constructor() {}
}

export interface Task {
  id: number;
  title: string;
  state: boolean;
}
