import { Routes } from '@angular/router';
import { MainLayoutComponent } from './system/layout/components/main-layout/main-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./system/auth/components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./feature/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'items',
        loadChildren: () =>
          import('./feature/items/items.module').then((m) => m.ItemsModule),
      },
    ],
  },
];
