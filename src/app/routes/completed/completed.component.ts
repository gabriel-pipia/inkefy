import { DataShareService } from 'src/app/service/data-share.service';
import { ItemsService } from './../../service/items.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item.model';

@Component({
  selector: 'todo-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  constructor(private DataShare: DataShareService, private ItemService: ItemsService) { }
  CompletedItem: Item[] = [];
  TempItems: Item[] = [];

  ngOnInit(): void {
    this.TempItems = this.CompletedItem;
    this.GetCompletedItem();
    this.DataShare.AddItemEmitter.subscribe(e => {
      this.GetCompletedItem();
    });
    this.DataShare.SearchValueEmitter.subscribe(value => {
      this.FilterItem(value);
    });
  }

  FilterItem(value: string) {
    this.CompletedItem = this.ItemService.Items!.filter((item) => item.description.toLowerCase().trim().includes(value.toLowerCase().trim()) && item.done == true);
  }

  GetCompletedItem() {
    this.CompletedItem = this.ItemService.Items!.filter((item) => item.done == true);
  }
}
