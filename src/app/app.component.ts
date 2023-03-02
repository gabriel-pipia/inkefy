import { ThemeService } from './service/theme.service';
import { Theme } from './models/Theme.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { DataShareService } from './service/data-share.service';
import { ItemsService } from './service/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private DataShare: DataShareService, private ItemService: ItemsService, private ThemeService: ThemeService) { }
  OpenModal: any = false;
  OpenAside: any = false;
  ThemeColor: Theme = this.ThemeService.GetTheme() || new Theme();

  ngOnInit(): void {
    this.ItemService.GetItems();
    this.DataShare.ModalEmitter.subscribe((e: boolean) => this.OpenModal = e);
    this.ThemeService.ThemeColorEmitter.subscribe(theme => {
      this.ThemeColor = theme;
      document.body.style.background = this.ThemeColor.backgroundColor;
    });
    this.DataShare.EditItemEmitter.subscribe(edit => {
      this.OpenModal = !this.OpenModal;
    });
  }

  onOpenAside(e: boolean) {
    this.OpenAside = e;
  }
}
