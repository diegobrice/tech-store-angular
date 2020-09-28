import {
  Component,
  EventEmitter,
  Input,
  Output,
  // OnChanges,
  // SimpleChanges,
  // OnInit,
  // DoCheck,
  // OnDestroy,
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('onChanges');
  //   console.log(changes);
  // }

  // ngOnInit() {
  //   console.log('onInit');
  // }

  // ngDoCheck() {
  //   console.log('DoCheck');
  // }

  // ngOnDestroy() {
  //   console.log('onDestroy');
  // }

  addCart() {
    this.productClicked.emit(this.product.title);
  }
}