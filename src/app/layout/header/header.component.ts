import { DataShareService } from 'src/app/service/data-share.service';
import { ThemeService } from './../../service/theme.service';
import { Theme } from './../../models/Theme.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private DataShare: DataShareService, private ThemeService: ThemeService) { }
  @Output() OpenAsideEmitter: EventEmitter<boolean> = new EventEmitter();
  ThemeColor: Theme = new Theme();
  SearchValue: String = '';

  ngOnInit(): void {
    this.ThemeService.ThemeColorEmitter.subscribe(theme => {
      this.ThemeColor = theme;
    });
  }

  onEmitSearchVlaue() {
    this.DataShare.SearchValueEmitter.emit(this.SearchValue);
  }

  onOpenAside(e: boolean) {
    this.OpenAsideEmitter.emit(e);
  }
}
