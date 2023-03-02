import { DataShareService } from 'src/app/service/data-share.service';
import { ThemeService } from './../../service/theme.service';
import { ItemsService } from 'src/app/service/items.service';
import { Item } from '../../models/Item.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Theme } from 'src/app/models/Theme.model';

@Component({
  selector: 'todo-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  constructor(private DataShare: DataShareService, private ItemServece: ItemsService, private ThemeService: ThemeService) { }
  @Input() Item!: Item;
  @Output() DeleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() UpdateItem: EventEmitter<Item> = new EventEmitter();

  ThemeColor: Theme = this.ThemeService.GetTheme() || new Theme();
  OpenItem: boolean = false;

  ngOnInit() {
    this.ThemeService.ThemeColorEmitter.subscribe(theme => {
      this.ThemeColor = theme;
    });
  }

  onOpenItem() {
    this.OpenItem = !this.OpenItem;
  }

  onDeleteItem() {
    let Items = this.ItemServece.Items;
    let index = Items.findIndex(i => i.id == this.Item.id);
    if (index != -1) {
      this.ItemServece.DeleteItem(index);
      this.DeleteItem.emit();
    }
  }

  onUpdateItem() {
    this.Item.done = !this.Item.done;
    this.ItemServece.AddItem(this.Item);
    this.DataShare.AddItemEmitter.emit();
    this.UpdateItem.emit();
  }

  onEditItem() {
    this.DataShare.EditItemEmitter.emit(this.Item);
  }
}