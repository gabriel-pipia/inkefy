import { ThemeService } from 'src/app/service/theme.service';
import { Item } from './../../models/Item.model';
import { DataShareService } from 'src/app/service/data-share.service';
import { Component } from '@angular/core';
import { ItemsService } from 'src/app/service/items.service';
import { Theme } from 'src/app/models/Theme.model';

@Component({
  selector: 'todo-task-add-modal',
  templateUrl: './task-add-modal.component.html',
  styleUrls: ['./task-add-modal.component.scss']
})
export class TaskAddModalComponent {
  constructor(private DataShare: DataShareService, private ItemService: ItemsService, private ThemeService: ThemeService) { }
  Item: Item = new Item();
  ThemeColor: Theme = new Theme();

  ngOnInit(): void {
    this.ThemeService.ThemeColorEmitter.subscribe(theme => {
      this.ThemeColor = theme;
    });
    this.DataShare.EditItemEmitter.subscribe(Item => {
      this.Item = Item;
    });
  }

  onCloseModal(e: any) {
    this.DataShare.ModalEmitter.emit(e);
    this.Item = new Item();
  }

  onAddItem(e: any) {
    e.preventDefault();
    this.Item.done = false;
    this.ItemService.AddItem(this.Item);
    this.DataShare.AddItemEmitter.emit();
    this.Item = new Item();
    this.onCloseModal(false);
  };
}

