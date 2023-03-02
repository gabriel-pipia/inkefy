import { DataShareService } from 'src/app/service/data-share.service';
import { Component, Input } from '@angular/core';
import { Theme } from 'src/app/models/Theme.model';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'todo-add-task-btn',
  templateUrl: './add-task-btn.component.html',
  styleUrls: ['./add-task-btn.component.scss']
})
export class AddTaskBtnComponent {
  constructor(private dataShare: DataShareService, private ThemeService: ThemeService) { }
  @Input() ThemeColor: Theme = new Theme();

  ngOnInit(): void {
    this.ThemeService.ThemeColorEmitter.subscribe(theme => {
      this.ThemeColor = theme;
    });
  }

  OpenModal(e: boolean) {
    this.dataShare.ModalEmitter.emit(e);
  }
}
