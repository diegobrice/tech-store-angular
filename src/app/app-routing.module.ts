import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContadorComponent } from './components/contador/contador.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./components/home/home.module').then((m) => m.HomeModule),
      },
      { path: 'productos', component: ProductsComponent },
      { path: 'productos/:id', component: ProductDetailComponent },
      { path: 'order', component: OrderComponent },
      { path: 'contacto', component: ContactComponent },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'contador', component: ContadorComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
