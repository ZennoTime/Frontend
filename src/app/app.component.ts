import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo-list';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Делать дз по SQL', done: true },
    { description: 'Делать дз по WebApi', done: false },
    { description: 'Делать ОП', done: false },
    { description: 'Делать Web', done: false },
    { description: 'Постараться поспать', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item : any) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}