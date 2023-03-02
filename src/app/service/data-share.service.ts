import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  @Output() ModalEmitter: EventEmitter<any> = new EventEmitter();
  @Output() AddItemEmitter: EventEmitter<any> = new EventEmitter();
  @Output() EditItemEmitter: EventEmitter<any> = new EventEmitter();
  @Output() SearchValueEmitter: EventEmitter<any> = new EventEmitter();

  onModal(e: boolean) {
    return e;
  }
}
