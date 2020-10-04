import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../interfaces/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string): void {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '100',
      title: 'title',
      image: 'urlImage',
      price: 1200,
      description: 'description',
    };

    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {
    const updatedProduct: Partial<Product> = {
      id: '100',
      title: 'title angular',
      image: 'urlImage angular',
      price: 3200,
      description: 'description angular',
    };

    this.productsService
      .updateProduct('12', updatedProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id).subscribe((product) => {
      console.log(product);
    });
  }
}
