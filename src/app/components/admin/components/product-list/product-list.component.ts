import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productsService.getAllProdutcs().subscribe((products) => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((res) => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }
}
