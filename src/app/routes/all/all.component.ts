import { Component } from '@angular/core';

@Component({
  selector: 'todo-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent {
  ShowCompleteTasks: boolean = true;
  onShowCompleteTasks() {
    this.ShowCompleteTasks = !this.ShowCompleteTasks;
  }
}
