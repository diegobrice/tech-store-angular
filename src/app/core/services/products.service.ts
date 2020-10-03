import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // products: Product[];

  constructor(private http: HttpClient) {}

  getAllProdutcs(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'https://platzi-store.herokuapp.com/products/'
    );
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(
      `https://platzi-store.herokuapp.com/products/${id}`
    );
  }
}

// {
//   id: '1',
//     image: 'assets/images/camiseta.png',
//       title: 'Camiseta',
//         price: 80000,
//           description: 'bla bla bla bla bla',
//     },
// {
//   id: '2',
//     image: 'assets/images/hoodie.png',
//       title: 'Hoodie',
//         price: 80000,
//           description: 'bla bla bla bla bla',
//     },
// {
//   id: '3',
//     image: 'assets/images/mug.png',
//       title: 'Mug',
//         price: 80000,
//           description: 'bla bla bla bla bla',
//     },
// {
//   id: '4',
//     image: 'assets/images/pin.png',
//       title: 'Pin',
//         price: 80000,
//           description: 'bla bla bla bla bla',
//     },
// {
//   id: '5',
//     image: 'assets/images/stickers1.png',
//       title: 'Stickers',
//         price: 80000,
//           description: 'bla bla bla bla bla',
//     },
// {
//   id: '6',
//     image: 'assets/images/stickers2.png',
//       title: 'Stickers',
//         price: 80000,
//           description: 'bla bla bla bla bla',
//     },
