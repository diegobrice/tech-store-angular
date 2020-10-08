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
import { Product } from '../../interfaces/product.model';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService) {}

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

  addCart(): void {
    this.productClicked.emit(this.product.title);
    this.cartService.addCart(this.product);
  }
}
