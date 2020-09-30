import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../interfaces/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products: Product[];

  clickProduct(nombreProducto: string): void {
    console.log(nombreProducto);
  }

  ngOnInit(): void {
    this.products = this.productsService.getAllProdutcs();
  }
}
