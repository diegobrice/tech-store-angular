import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent implements OnInit {
  constructor() {}

  newItem = '';
  items = ['laptop', 'cel', 'watch', 'tablet'];

  addItem() {
    this.items.push(this.newItem);
    this.newItem = '';
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  ngOnInit(): void {}
}
