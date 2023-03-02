import { DataShareService } from 'src/app/service/data-share.service';
import { Component } from '@angular/core';
import { ItemsService } from 'src/app/service/items.service';
import { Item } from '../../models/Item.model';

@Component({
  selector: 'todo-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent {
  constructor(private DataShare: DataShareService, private ItemService: ItemsService) { }
  PendingItem: Item[] = [];
  TempItems: Item[] = [];

  ngOnInit(): void {
    this.TempItems = this.PendingItem;
    this.GetPendingItem();
    this.DataShare.AddItemEmitter.subscribe(e => {
      this.GetPendingItem();
    });
    this.DataShare.SearchValueEmitter.subscribe(value => {
      this.FilterItem(value);
    });
  }

  FilterItem(value: string) {
    this.PendingItem = this.ItemService.Items!.filter((item) => item.description.toLowerCase().trim().includes(value.toLowerCase().trim()) && item.done == false);
  }

  GetPendingItem() {
    this.PendingItem = this.ItemService.Items!.filter((item) => item.done == false);
  }
}
