export interface Item {
  id: string;
  description: string;
  done: boolean;
}

export class Item {
  id: string = this.randomItemId();
  description: string = '';
  done: boolean = false;

  randomItemId() {
    return 'xxxx-xxxx-xxxx'.replace(/[xy]/g, function (c) {
      var Rundom = Math.random() * 16 | 0, v = c == 'x' ? Rundom : (Rundom & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}