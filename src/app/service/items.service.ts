import { Item } from './../models/Item.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ItemsService {
  Items: Item[] = this.GetItems();

  private saveItem() {
    localStorage.setItem('Todos', JSON.stringify(this.Items));
  }

  AddItem(newItem: Item) {
    let items: Item[] = this.GetItems();
    let findItem = items.find(i => i.id == newItem.id);
    if (findItem) {
      findItem.done = newItem.done;
      findItem.description = newItem.description;
    } else {
      this.Items.unshift(newItem);
    }
    this.saveItem();
  }

  GetItems() {
    const todoItems = localStorage.getItem('Todos');
    if (todoItems) {
      this.Items = JSON.parse(todoItems);
    } else {
      this.Items = []
    }
    return this.Items;
  }

  DeleteItem(index: number) {
    this.Items.splice(index, 1);
    this.saveItem();
  }
}
